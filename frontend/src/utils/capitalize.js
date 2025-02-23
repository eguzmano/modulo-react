const capitalize = (str) =>
  str.split(' ') // Divide la frase en palabras
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitaliza cada palabra
    .join(' ') // Une las palabras de nuevo

export default capitalize
