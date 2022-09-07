import { HiCode } from 'react-icons/hi'
import { IoGitNetworkSharp } from 'react-icons/io5'
import DevToolsChrome from '../../assets/blog-assets/devtools.webp'
import HTML from '../../assets/blog-assets/html.webp'
import MacBookAirM2 from '../../assets/blog-assets/macbook-air-m2.webp'
import MejoresRatonesGaming2022 from '../../assets/blog-assets/mejores-ratones-gaming-2022.webp'
import MejoresLibrosDesarrolladores from '../../assets/blog-assets/libros-desarrolladores/libros-desarrolladores.webp'
import ColeccionRecursosTailwind from '../../assets/blog-assets/coleccion-recursos-tailwind/tailwind-css-cheat-sheet.webp'
// import CSS from '../../assets/blog-assets/css.webp'
// import JavaScript from '../../assets/blog-assets/javascript.webp'
// import React from '../../assets/blog-assets/react.webp'

const ArticleData = [
    {
    categoryimg: <HiCode />,
    category: 'Desarrollo Web',
    image: ColeccionRecursosTailwind,
    title: 'Colección de recursos para Tailwind',
    date:'Septiembre 06, 2022',
    url: 'ColeccionRecursosTailwind',
    },
    {
    categoryimg: <HiCode />,
    category: 'Desarrollo Web',
    image: MejoresLibrosDesarrolladores,
    title: 'Mejores libros para desarrolladores',
    date:'Septiembre 06, 2022',
    url: 'MejoresLibrosDesarrolladores',
    },
    {
    categoryimg: <IoGitNetworkSharp />,
    category: 'Tecnología',
    image: MejoresRatonesGaming2022,
    title: 'Los mejores ratones gaming 2022',
    date:'Agosto 18, 2022',
    url: 'MejoresRatonesGaming2022',
    },
    {
    categoryimg: <IoGitNetworkSharp />,
    category: 'Tecnología',
    image: MacBookAirM2,
    title: 'MacBook Air M2 review',
    date:'Agosto 14, 2022',
    url: 'MacBookAirM2review',
    },
    {
    categoryimg: <HiCode />,
    category: 'Desarrollo Web',
    image: HTML,
    title: 'Etiquetas HTML esenciales que debes conocer',
    date:'Julio 25, 2022',
    url: 'EtiquetasHtmlEsenciales',
    },
    {
    categoryimg: <HiCode />,
    category: 'Desarrollo Web',
    image: DevToolsChrome,
    title: 'Novedades en DevTools (Chrome 103)',
    date:'Julio 24, 2022',
    url: 'DevToolsChrome103',
    },
]

export default ArticleData