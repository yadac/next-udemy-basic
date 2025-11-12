'use server'

import { redirect } from "next/navigation";
import { ContactScheme } from '@/validations/contact'

export async function submitContactForm(formData: FormData) {
    const name = formData.get('name');
    const email = formData.get('email');

    // validation
    const validationResult = ContactScheme.safeParse({ name, email })
    if (!validationResult.success) {
        const errors = validationResult.error.flatten()
        console.log("サーバ側でエラー", errors)
        return {}
    }

    // regist db

    console.log('送信されたデータ：', { name, email })
    redirect('/contacts/complete')
}