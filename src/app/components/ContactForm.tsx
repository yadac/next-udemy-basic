'use client'
export default function ContactForm() {
    return (
        <div>
            <form action="">
                <div>
                    <div>
                        <h2>お問い合わせ</h2>
                        <div>
                            <label htmlFor="name">名前</label>
                            <input type="text" id="name" name="name"></input>
                        </div>
                        <div>
                            <label htmlFor="email">メールアドレス</label>
                            <input type="text" id="email" name="email"></input>
                        </div>
                        <button>登録</button>
                    </div>
                </div>
            </form>
        </div>
    )
}