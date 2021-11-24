import './style.css'

export function Newsletter() {
    return (
        <div className="newsletter">
            <div className="container">
                <h2>Newsletter</h2>
                <p className="fw-light">Assine nossa Newsletter para receber atualizações sobre ofertas especiais, novos produtos ou informações
                    de descontos</p>
                <form>
                    <input type="text" className="form-control form-control-lg" placeholder="Informe o seu e-mail" />
                    <button className="btn btn-primary btn-lg ">Inscreva-se</button>
                </form>
            </div>
        </div>
    )
}