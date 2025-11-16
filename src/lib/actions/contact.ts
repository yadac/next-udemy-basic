'use server'

import { redirect } from "next/navigation";
import { ContactScheme } from '@/validations/contact'
import { prisma } from '@/lib/prisma'

type ActionState = {
    success: boolean;
    errors: { name?: string[], email?: string[] }
    serverError?: string
}

export async function submitContactForm(prevState: ActionState, formData: FormData): Promise<ActionState> {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    console.log('DB URL at runtime:', process.env.DATABASE_URL)

    // validation
    const validationResult = ContactScheme.safeParse({ name, email })
    if (!validationResult.success) {
        const errors = validationResult.error.flatten().fieldErrors
        console.log("サーバ側でエラー", errors)
        return {
            success: false,
            errors: {
                name: errors.name || [],
                email: errors.email || []
            }
        }
    }

    // regist db
    const existingRecord = await prisma.contact.findUnique({ where: { email: email } })
    if (existingRecord) {
        return {
            success: false,
            errors: {
                name: [],
                email: ['このメールアドレスは既に登録されています']
            }
        }
    }

    await prisma.contact.create({
        data: { name, email }
    })

    console.log('送信されたデータ：', { name, email })
    redirect('/contacts/complete')
}