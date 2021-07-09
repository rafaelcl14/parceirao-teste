import { NextApiRequest, NextApiResponse } from 'next/types'

import sendNotification from '../../utils/sendNotification'

export default async function mail(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  if (req.method === 'POST') {
    const {
      userName,
      telefone,
      email,
      cpf,
      rua,
      numero,
      bairro,
      cidade
    } = req.body
    sendNotification({
      userName,
      telefone,
      email,
      cpf,
      rua,
      numero,
      bairro,
      cidade
    })

    return res.status(200).json({ success: 'email is send' })
  } else {
    return res.status(400).json({ error: 'invalid request method' })
  }
}
