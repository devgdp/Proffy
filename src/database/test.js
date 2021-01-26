const Database = require('./db')
const createProffy = require('./createProffy')


Database.then(async (db) => {
    // Recebendo os Dados em objetos
    proffyValue = {
        name: "Guilherme Dias",
        avatar: "https://source.unsplash.com/random",
        whatsapp: "11954244199",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões."
    }

    classValue = {
        subject: 1,
        cost: "20"
    }

    classScheduleValues = [
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        }
]

// await createProffy(db, {proffyValue, classValue, classScheduleValues})

    // Consultar os dados Inseridos
    // Todos os proffys
    const selectedProffy = await db.all("SELECT * FROM proffys")
    //console.log(selectedProffy)

    // consultar as classes de um determinado proffy, e trazer junto os dados do professor
    const selectedClassAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    //console.log(selectedClassAndProffys)

    // consultar o horario que a pessoa trabalha, por exemplo e das 8h -18h
    // o horario time_from (8h), precisa ser menor ou igual ao horario solicitado 
    // o horario time_to precisa ser acima

    const selectedClassesSchedule = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "520"
        AND class_schedule.time_to > "520"

    `)
    console.log(selectedClassesSchedule)

})