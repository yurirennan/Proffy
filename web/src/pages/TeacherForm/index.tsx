import React, { useState, FormEvent } from 'react'
import { useHistory } from 'react-router-dom';

import api from '../../services/api';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/TextArea';
import Select from '../../components/Select';
import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';

function TeacherForm() {
    const history = useHistory();

    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [bio, setBio] = useState('');

    const [subject, setSubject] = useState('');
    const [cost, setCost] = useState('');


    const [scheduleItems, setScheduleItem] = useState(
        [{ week_day: 0, from: '', to: '' }]
    );

    function addNewScheduleItem() {
        setScheduleItem([
            ...scheduleItems,
            { week_day: 0, from: '', to: '' }
        ]);
    }

    function handleCreateClass(event: FormEvent) {
        event.preventDefault();

        api.post('/classes', {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost: Number(cost),
            schedule: scheduleItems
        }).then(() => {
            alert("Cadastro realizado com sucesso!");

            history.push('/study')
        }).catch(() => {
            alert("Erro ao realizar cadastro!");
        });

    }


    function setScheduleItemValue(position: number, field: string, value: string) {
        const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
            if (index === position) {
                return { ...scheduleItem, [field]: value }
            }

            return scheduleItem;
        });

        setScheduleItem(updatedScheduleItems);
    }


    return (
        <div id="page-teacher-form" className="container">
            <PageHeader
                title="Que incrível que você quer dar aulas."
                description="O primeiro passo, é preencher esse formulário de inscrição."
            />

            <main>
                <form onSubmit={handleCreateClass}>
                    <fieldset>
                        <legend>Seus Dados</legend>

                        <Input name="name" label="Nome Completo" value={name} onChange={(event) => { setName(event.target.value) }} ></Input>
                        <Input name="avatar" label="Avatar" value={avatar} onChange={(event) => { setAvatar(event.target.value) }} ></Input>
                        <Input name="whatsapp" label="Whatsapp" value={whatsapp} onChange={(event) => { setWhatsapp(event.target.value) }} ></Input>
                        <Textarea name="bio" label="Biografia" value={bio} onChange={(event) => { setBio(event.target.value) }} />

                    </fieldset>

                    <fieldset>
                        <legend>Sobre a Aula</legend>

                        <Select
                            name="subject"
                            label="Matéria"
                            value={subject} onChange={(event) => { setSubject(event.target.value) }}
                            options={[
                                { value: 'Artes', label: 'Artes' },
                                { value: 'Biologia', label: 'Biologia' },
                                { value: 'Ciências', label: 'Ciências' },
                                { value: 'Educação Física', label: 'Educação Física' },
                                { value: 'Física', label: 'Física' },
                                { value: 'Química', label: 'Química' },
                                { value: 'Matemática', label: 'Matemática' },
                                { value: 'Portugês', label: 'Portugês' },
                                { value: 'História', label: 'História' },
                                { value: 'Geografia', label: 'Geografia' },
                            ]}
                        />
                        <Input name="cost" label="Custa da sua hora por aula" value={cost} onChange={(event) => { setCost(event.target.value) }} ></Input>
                    </fieldset>

                    <fieldset>
                        <legend>
                            Horários disponíveis
                        <button type='button' onClick={addNewScheduleItem}>+ Novo horário</button>
                        </legend>

                        {scheduleItems.map((scheduleItem, index) => {
                            return (
                                <div key={(scheduleItem.week_day)} className="schedule-item">
                                    <Select
                                        name="week_day"
                                        label="Dia da semana"
                                        value={scheduleItem.week_day}
                                        onChange={event => setScheduleItemValue(index, 'week_day', event.target.value)}
                                        options={[
                                            { value: '0', label: 'Domingo' },
                                            { value: '1', label: 'Segunda-feira' },
                                            { value: '2', label: 'Terça-feira' },
                                            { value: '3', label: 'Quarta-feira' },
                                            { value: '4', label: 'Quinta-feira' },
                                            { value: '5', label: 'Sexta-feira' },
                                            { value: '6', label: 'Sábado' },
                                        ]}
                                    />
                                    <Input name="from" label="Das" type="time" value={scheduleItem.from}
                                        onChange={event => setScheduleItemValue(index, 'from', event.target.value)}
                                    />
                                    <Input name="to" label="Até" type="time" value={scheduleItem.to}
                                        onChange={event => setScheduleItemValue(index, 'to', event.target.value)}

                                    />

                                </div>
                            );
                        })}


                    </fieldset>

                    <footer>
                        <p>
                            <img src={warningIcon} alt="Aviso Importante" />
                        Importante <br />
                        Preencha todos os dados.
                    </p>

                        <button type="submit">Salvar Cadastro</button>
                    </footer>

                </form>
            </main>
        </div>
    );
}


export default TeacherForm;