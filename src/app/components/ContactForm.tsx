'use client'

import { submitContactForm } from "@/lib/actions/contact"

export default function ContactForm() {
    return (
        <div className="flex items-center justify-center px-4 py-10">
            <form
                action={submitContactForm}
                className="w-full max-w-md rounded-xl border border-slate-200 bg-gradient-to-b from-sky-50 to-slate-50 shadow">
                <div className="rounded-t-xl border-b border-slate-200 bg-sky-100/60 px-6 py-5">
                    <h2 className="text-lg font-semibold text-slate-800">お問い合わせ</h2>
                    <p className="mt-1 text-sm text-slate-600">ご質問があればお気軽にどうぞ。</p>
                </div>

                <div className="space-y-4 px-6 py-5">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-700">
                            名前
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
                            placeholder="山田 太郎"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700">
                            メールアドレス
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
                            placeholder="example@mail.com"
                        />
                    </div>

                    <div className="pt-2">
                        <button
                            type="submit"
                            className="inline-flex items-center justify-center rounded-md bg-sky-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:ring-offset-1 active:bg-sky-800"
                        >
                            登録
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

