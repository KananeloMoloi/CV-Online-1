function myfunction()
{
     const taxValue = parseFloat(document.getElementById('income').value)
     
    let tax = 0;
    if(taxValue=>1 && taxValue<2371001)
    {
         tax= taxValue*0.18;
    }
    else if( taxValue=>2371001 && taxValue<370501)
    {
         tax= taxValue*0.26
    }
    else if( taxValue=>370501 && taxValue<512801)
    {
         tax= taxValue*0.31;
    }
    else if( taxValue=>512801 && taxValue<673001)
    {
        let tax= taxValue*0.36;
    }
    else if( taxValue=>673001 && taxValue<857901)
    {
         tax= taxValue*0.39;
    }
    else if( taxValue=>857901 && taxValue<1817001)
    {
         tax= taxValue*0.41;
    }
    else ( taxValue=>1817001)
    {
         tax= taxValue*0.45;
    }

    document.getElementById('results').value = tax
    //alert("your tax: "+ tax)
}


