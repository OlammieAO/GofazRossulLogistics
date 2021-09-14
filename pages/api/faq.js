const mail = require('@sendgrid/mail')

mail.setApiKey(process.env.SENDGRID_API_KEY)

export default (req, res) => {
    const body = JSON.parse(req.body)
    console.log(body)

    const message = `
    Name : ${body.name} \r\n
    Email: ${body.email} \r\n
    Message: ${body.message} \r\n
`

    const data = {
        to: 'info@gofazrossul.com',
        from: 'info@gofazrossul.com',
        subject: `Enquiry From ${body.name} : ${body.email}`,
        text: message,
        html: message.replace(/\r\n/g, '<br/>')
    }

    mail.send(data)

    res.status(201).JSON({status: 'ok'})
}