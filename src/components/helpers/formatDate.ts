export const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }
    return date.toLocaleDateString('en-US', options)  // це вивод дати. long це написано, numeric це чіслом пишеться / cказав шо краще переробить під юзСтейт, шоб при зміні дня воно динамічно змінювалось
}

// interface DateTimeFormatOptions {  замінили Intl встроїною функцією
//     localeMatcher?: "lookup" | "best fit";
//     weekday?: "long" | "short" | "narrow";
//     era?: "long" | "short" | "narrow";
//     year?: "numeric" | "2-digit";
//     month?: "numeric" | "2-digit" | "long" | "short" | "narrow";
//     day?: "numeric" | "2-digit";
//     hour?: "numeric" | "2-digit";
//     minute?: "numeric" | "2-digit";
//     second?: "numeric" | "2-digit";
//     timeZoneName?: "long" | "short";
//     formatMather?: "basic" | "best fit";
//     hour12?: boolean;
//     timeZone?: string;
// }