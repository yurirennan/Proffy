import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';


import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://pbs.twimg.com/profile_images/470621651147558912/Y8RWrJra_400x400.png" alt="Yuri Rennan" />
                <div>
                    <strong>Yuri Rennan</strong>
                    <span>Química</span>
                </div>
            </header>

            <p>
                Entusiasta das melhores tecnologias de Química avançada.
                        <br /><br />
                        Apaixonaodo por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
                    </p>

            <footer>
                <p>
                    Preço/hora
                            <strong>R$ 20,00</strong>
                </p>

                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                            Entrar em contato.
                        </button>
            </footer>
        </article>
    );
}

export default TeacherItem;