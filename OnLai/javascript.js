function tinhCbo()
{
    a = document.f.a.value;
    b = document.f.b.value;
    cbo = document.f.sel.value;
    a = Number(a);
    b = Number(b);
    if(cbo == '+')
        document.f.kq.value=a+b;
    else if(cbo == '-')
        document.f.kq.value=a-b;
    else if(cbo == '*')
        document.f.kq.value=a*b;
    else if(cbo == '/')
        document.f.kq.value=a/b;
    else if(cbo == '%')
        document.f.kq.value=a%b;
}