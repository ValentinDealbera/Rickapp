import styles from './About.module.css'

const About = () => {
    return (
        <div className={styles.about}>
            <h2>Acerca de mi</h2>
            <p>mi nombre es Valentin Dealbera, soy musico y programador.
                vengo de un pequeño pueblo llamado Monte Caseros, en la provinica de corrientes
                en Argentina, toda mi vida me han apasionado el gaming, la programacion y la musica.
                me he dedicado a la musica hasta el año 2023 cuando gracias a recomendaciones de amigos
                comence a hacer la carrera de fullstack development en Soyhenry, lo cual ha traido
                muchas cosas buenas en mi vida, la programacion es algo en lo que siempre he sido curioso
                pero nunca tuve el coraje para hacerlo, hasta hoy, y gracias a los conocimientos
                que Soyhenry me esta dando, he sido capaz de construir esta aplicacion.
            </p>
            <img className={styles.img} src="https://scontent.frcu1-1.fna.fbcdn.net/v/t39.30808-6/306008735_10221903951929812_6953663035864221868_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHOxLZOOZBzafefp4HYm7RD89kCxsOeaMLz2QLGw55owg2D3Grc3ckUik5GVdaBUg4&_nc_ohc=tdzfYfR572AAX__wram&_nc_ht=scontent.frcu1-1.fna&oh=00_AfAmJC3u8YOQyKnhjlXvJXSiNFXE8qnbG6CkWa0lQr3jJw&oe=63F1C2BF" alt="Valentin Dealbera" />
        </div>
    )
}

export default About