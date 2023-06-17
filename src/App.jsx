import './App.css'
import Loguito from '../src/assets/Logoremo.png'
import Loguito1 from '../src/assets/Logo2.png'
import Loguito2 from '../src/assets/Logo3.png';
import Datos from '../src/assets/Datos.jpeg';

function App() {

  return (
 
    <div>
      
      <nav>
<div class="logo"><img className="logo1"src={Loguito}></img>
<img className="logo2"src={Loguito1}></img>
<img className="logo3"src={Loguito2}></img></div>
</nav>
<div className="barnav">
  <a href='#general' className="titleNav1">General</a>
  <a href='#Datos' className="titleNav1">Datos</a>
  <a href='#Conclusiones' className="titleNav1">Conclusiones</a>
 

</div>
<div className='items'>
<div className="contenido">
<h1 className='title1'>Bienvenido al SIViGILA</h1>
<p> 
Brindamos informacion  de calidad con determinación en tendencias para que el ministerio de 
salud en Colombia tome decisiones pro en la calidad de vida de los colombianos.
</p>
</div>
  </div>
  <div id="Datos">
  <h1 className='title11'>Datos</h1>
  <div className='container'>
  <iframe title="Report Section" width="600" height="373.5" src="https://app.powerbi.com/view?r=eyJrIjoiNTFiYzJmODQtZTRlMS00ZGZjLWI5N2YtNjQ5NmM1YTI5MGRkIiwidCI6IjU3N2ZjMWQ4LTA5MjItNDU4ZS04N2JmLWVjNGY0NTVlYjYwMCIsImMiOjR9" frameborder="0" allowFullScreen="true"></iframe>
  </div>
  </div>

  <div id="Conclusiones" className='titulo'>
  <h1 className='title11'>Conclusiones</h1>
  <div className="conclusiones">
  <li>Cantidad de semanas 53 </li>
  <li>Casos reportados 172852 </li>
  <li>Departamento con mayor casos antioquia con 155856 </li>
  <li>De acuerdo con el decrecimiento entre los años 2020, 2022 y 2023 se espera que para el 2024 haya un valor de 8396 infectados siendo en 2023 hasta la semana 16, 6635 infectados.</li>
  </div>

  

  </div>
  </div>
  )
}

export default App
