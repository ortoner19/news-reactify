export const formatDate = (date) => {
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }
    return date.toLocaleDateString('en-US', options)  // це вивод дати. long це написано, numeric це чіслом пишеться / cказав шо краще переробить під юзСтейт, шоб при зміні дня воно динамічно змінювалось
}