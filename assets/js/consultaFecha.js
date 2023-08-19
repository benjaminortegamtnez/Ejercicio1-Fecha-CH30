function checkDate() {
    const day = parseInt(document.getElementById("day").value);
    const month = parseInt(document.getElementById("month").value);
    const year = parseInt(document.getElementById("year").value);
  
    const date = new Date(year, month - 1, day);
    const dayOfWeek = date.getDay();
    const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  
    let dayName;
    switch (dayOfWeek) {
      case 0:
        dayName = "Domingo";
        break;
      case 1:
        dayName = "Lunes";
        break;
      case 2:
        dayName = "Martes";
        break;
      case 3:
        dayName = "Miércoles";
        break;
      case 4:
        dayName = "Jueves";
        break;
      case 5:
        dayName = "Viernes";
        break;
      case 6:
        dayName = "Sábado";
        break;
    }
  
    let dayType;
    if (dayOfWeek === 0 || dayOfWeek === 6) {
      dayType = "fin de semana";
    } else {
      dayType = "día laboral";
    }
  
    const result = `El ${day}/${month}/${year} fue ${dayName}, un ${dayType}.`;
  
    if (isLeapYear) {
      document.getElementById("result").textContent = result + " De un año bisiesto.";
    } else {
      document.getElementById("result").textContent = result + " De un año normal.";
    }
  }
  