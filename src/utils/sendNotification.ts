import nodemailer from 'nodemailer'

interface sendMyNotificationInterface {
  userName: string
  telefone: string
  email: string
  cpf: string
  rua: string
  numero: string
  bairro: string
  cidade: string
}
export default async function sendMyNotification({
  userName,
  telefone,
  email,
  cpf,
  rua,
  numero,
  bairro,
  cidade
}: sendMyNotificationInterface): Promise<void> {
  const trasporter = nodemailer.createTransport({
    host: 'smtp.zoho.com',
    port: 587,
    secure: false,
    auth: {
      user: 'marketing@lojasoi.com',
      pass: 'Lk2Ul^G%@1ri'
    }
  })
  await trasporter.sendMail({
    from: 'Marketing <marketing@lojasoi.com>',
    to: 'marketing@lojasoi.com',
    subject: 'Agendamento',
    html: `
      <p style="margin-bottom:22px; font-size: 18px" >
        Uma nova pessoa pretende fazer um agendamento.
      </p>
      <p style="margin-bottom:22px; font-size: 18px" >
        <strong>Nome: </strong>${userName}<br/>
        <strong>Email: </strong>${email}<br/>
        <strong>Telefone: </strong>${cpf}<br/>
        <strong>Cidade: </strong>${rua}<br/>
        <strong>Data: </strong>${bairro}<br/>
      </p>
    `
  })
}
