# Portfolio de José Manuel

Mi web personal, donde muestro mis proyectos. Está en español y publicada con GitHub Pages:

https://josebenitezalba.github.io/Personal-Website/

## Qué muestra

- Una presentación corta y el puesto que busco: desarrollador PHP, en Cádiz o en remoto.
- **PoolBook**, mi proyecto final del DAW: una web para reservar carril de piscina, hecha con Laravel. Tiene demo, vídeo y código en [su repositorio](https://github.com/JoseBenitezAlba/poolbook).
- Mi experiencia en prácticas (FP dual) y las tecnologías que uso.
- Un enlace a mi CV en PDF.

## Cómo está hecha

HTML, CSS y JavaScript sin frameworks ni paso de compilación. La tipografía es Inter, de Google Fonts.

| Archivo | Qué contiene |
| --- | --- |
| `index.html` | El contenido de la página |
| `style.css` | Los estilos |
| `app.js` | El menú móvil y la aparición de las secciones |
| `assets/` | Capturas de PoolBook, icono e imagen para compartir |
| `CV-Jose-Manuel-Benitez-Alba.pdf` | Mi CV |

## Abrirla en local

```bash
git clone https://github.com/JoseBenitezAlba/Personal-Website.git
cd Personal-Website
python3 -m http.server 8000
```

Después se abre `http://localhost:8000`. También funciona abriendo `index.html` directamente en el navegador, aunque sin conexión se verá con la tipografía del sistema.

## Publicación

GitHub Pages publica la rama `main`: los cambios que se fusionan en `main` se despliegan solos.
