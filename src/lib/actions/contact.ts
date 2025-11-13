'use server'

import { redirect } from "next/navigation";
import { ContactScheme } from '@/validations/contact'

type ActionState = {
    success: boolean;
    errors: { name?: string[], email?: string[] }
    serverError?: string
}

export async function submitContactForm(prevState: ActionState, formData: FormData): Promise<ActionState> {
    const name = formData.get('name');
    const email = formData.get('email');

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

    console.log('送信されたデータ：', { name, email })
    redirect('/contacts/complete')
}