import './App.css'
import logo from './assets/images/logo.svg'
import icon_hour from './assets/images/icon-hour.png'
import required_mask from './assets/images/required-mask.png'
import recommended_mask from './assets/images/recommended-mask.png'
import required_towel from './assets/images/required-towel.png'
import recommended_towel from './assets/images/recommended-towel.png'
import partial_fountain from './assets/images/partial-fountain.png'
import forbidden_fountain from './assets/images/forbidden-fountain.png'
import open_locker from './assets/images/required-lockerroom.png'
import partial_locker from './assets/images/partial-lockerroom.png'
import closed_locker from './assets/images/forbidden-lockerroom.png'


function Header() {
  return (
    <header>
      <img src={logo} alt='logo' className='logo' />
    </header>
  );
}

function Form() {
  return (
    <form>
      <h1>Reabertura<br/>Smart Fit</h1>
      <hr className='h-line'/>
      <p className='text-description'>O horário de funcionamento das nossas unidades está seguindo os decretos de cada município. Por isso, confira aqui se a sua unidade está aberta e as medidas de segurança que estamos seguindo.</p>
      <div className='selection-wrapper'>
        <div className='clock-wrapper'>
          <img src={icon_hour} alt='icon-hour' className='icon-hour' />
          <p>Horário</p>
        </div>
        <h2 className='pergunta'>Qual o período quer treinar?</h2>
        <label className='option-label' htmlFor="manha">
          <input type="radio" id="manha" value="Manha" name='group'/>
          <div className='option-wrapper'>
            <span>Manhã</span>
            <span>06:00 às 12:00</span>
          </div>
        </label>
        <label className='option-label' htmlFor="tarde">
          <input type="radio" id="tarde" value="Tarde" name='group'/>
          <div className='option-wrapper'>
            <span>Tarde</span>
            <span>12:01 às 18:00</span>
          </div>
        </label>
        <label className='option-label' htmlFor="noite">
          <input type="radio" id="noite" value="Noite" name='group'/>
          <div className='option-wrapper'>
            <span>Noite</span>
            <span>18:01 às 23:00</span>
          </div>
        </label>
        <div className='checkbox-results'>
          <label htmlFor="show-units">
            <input type="checkbox" />
            Exibir unidades fechadas
          </label>
          <p>Resultados encontrados: <b>0</b></p>
        </div>
        <div className='btn-wrapper'>
          <button type='submit'>Encontrar Unidade</button>
          <button type='reset'>Limpar</button>
        </div>
      </div>
    </form>
  );
}

function Legend() {
  return (
    <section className='legend'>
      <div>
        <h3>Máscara</h3>
        <div>
          <div className='legend-item'>
            <img src={required_mask} alt='mandatory-mask'/>
            <p>Obrigatório</p>
          </div>
          <div className='legend-item'>
            <img src={recommended_mask} alt='mandatory-mask'/>
            <p>Recomendado</p>
          </div>
        </div>
      </div>
      <div>
        <h3>Toalha</h3>
        <div>
          <div className='legend-item'>
            <img src={required_towel} alt='mandatory-mask'/>
            <p>Obrigatório</p>
          </div>
          <div className='legend-item'>
            <img src={recommended_towel} alt='mandatory-mask'/>
            <p>Recomendado</p>
          </div>
        </div>
      </div>
      <div>
        <h3>Bebedouro</h3>
        <div>
          <div className='legend-item'>
            <img src={partial_fountain} alt='mandatory-mask'/>
            <p>Parcial</p>
          </div>
          <div className='legend-item'>
            <img src={forbidden_fountain} alt='mandatory-mask'/>
            <p>Proibido</p>
          </div>
        </div>
      </div>
      <div>
        <h3>Vestuários</h3>
        <div>
          <div className='legend-item'>
            <img src={open_locker} alt='mandatory-mask'/>
            <p>Liberado</p>
          </div>
          <div className='legend-item'>
            <img src={partial_locker} alt='mandatory-mask'/>
            <p>Parcial</p>
          </div>
          <div className='legend-item'>
            <img src={closed_locker} alt='mandatory-mask'/>
            <p>Fechado</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function List() {
  return (
    <section className='list'>
      <div className="card">
        <span className="status" data-open>Aberto</span>
        <h2 className='name'>Vicente Linhares</h2>
        <p className='address'>Rua Tibúrcio Cavalcante, 1885 - Meireles Fortaleza, CE</p>
        <hr className='h-line'/>
        <div className="images-wrapper">
          <img src={required_mask} alt='mandatory-mask'/>
          <img src={required_towel} alt='mandatory-mask'/>
          <img src={partial_fountain} alt='mandatory-mask'/>
          <img src={open_locker} alt='mandatory-mask'/>
        </div>
        <div className="schedule">
          <div className="working-days">
            <h2>Seg. à Sex.</h2>
            <p>06h às 22h</p>
          </div>
          <div className="saturday">
            <h2>Sáb.</h2>
            <p>09h às 18h</p>
          </div>
          <div className="sunday">
            <h2>Dom.</h2>
            <p>Fechada</p>
          </div>
        </div>
      </div>
      <div className="card">
        <span className="status">Fechado</span>
        <h2 className='name'>Vila Carrão</h2>
        <p className='address'>Av. Guilherme Giorgi, 1460, Vila Carrão, São Paulo - SP</p>
      </div>
      <div className="card">
        <span className="status">Fechado</span>
        <h2 className='name'>Vila Carrão</h2>
        <p className='address'>Av. Guilherme Giorgi, 1460, Vila Carrão, São Paulo - SP</p>
      </div>
    </section>
  );
}



function Footer() {
  return (
    <footer>
      <img src={logo} alt="logo" />
      <p>Todos os direitos reservados - 2020</p>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Form />
        <Legend />
        <List />
      </main>
      <Footer />
    </>
  )
}


