import speech_recognition as sr
import pyttsx3
import requests
import openai

# Initialize the recognizer
recognizer = sr.Recognizer()

# Initialize the text-to-speech engine
engine = pyttsx3.init()
engine.setProperty('rate', 150)  # Speed percent (can go over 100)
engine.setProperty('volume', 0.9)  # Volume 0-1

# Set up your OpenAI API key
openai.api_key = 'YOUR_OPENAI_API_KEY'

def speak(text):
    """Convert text to speech."""
    engine.say(text)
    engine.runAndWait()

def listen():
    """Capture voice input from the microphone and return it as text."""
    with sr.Microphone() as source:
        print("Listening...")
        recognizer.adjust_for_ambient_noise(source)
        audio = recognizer.listen(source)
        
        try:
            print("Recognizing...")
            text = recognizer.recognize_google(audio)
            print(f"You said: {text}")
            return text
        except sr.UnknownValueError:
            speak("Sorry, I could not understand the audio.")
        except sr.RequestError as e:
            speak(f"Could not request results; {e}")

def process_command(command):
    """Process the command and perform actions."""
    if 'weather' in command:
        get_weather()
    elif 'news' in command:
        get_news()
    elif 'tell me about' in command:
        respond_with_gpt(command)
    else:
        speak("I'm not sure how to help with that.")

def get_weather():
    """Fetch weather information."""
    api_key = 'YOUR_WEATHER_API_KEY'
    base_url = "http://api.openweathermap.org/data/2.5/weather?"
    city_name = "London"  # You can change this to your city
    complete_url = base_url + "appid=" + api_key + "&q=" + city_name
    
    response = requests.get(complete_url)
    data = response.json()
    
    if data["cod"] != "404":
        main = data["main"]
        temperature = main["temp"]
        pressure = main["pressure"]
        humidity = main["humidity"]
        weather_description = data["weather"][0]["description"]
        
        weather_response = (f"Temperature: {temperature}\n"
                            f"Atmospheric pressure: {pressure} hPa\n"
                            f"Humidity: {humidity}%\n"
                            f"Description: {weather_description}")
        speak(weather_response)
    else:
        speak("City Not Found.")

def get_news():
    """Fetch the latest news."""
    api_key = 'YOUR_NEWS_API_KEY'
    url = f"https://newsapi.org/v2/top-headlines?country=us&apiKey={api_key}"
    response = requests.get(url)
    data = response.json()
    
    if data["status"] == "ok":
        articles = data["articles"]
        top_article = articles[0]
        news_response = f"Here's the latest news: {top_article['title']}"
        speak(news_response)
    else:
        speak("Failed to fetch news.")

def respond_with_gpt(prompt):
    """Use OpenAI GPT to generate a response."""
    response = openai.Completion.create(
        engine="text-davinci-003",  # Or whichever model you prefer
        prompt=prompt,
        max_tokens=150
    )
    answer = response.choices[0].text.strip()
    speak(answer)

if __name__ == "__main__":
    speak("Hello, I am JARVIS. How can I assist you today?")
    
    while True:
        command = listen()
        if command:
            process_command(command)
        else:
            speak("I did not catch that. Please try again.")
