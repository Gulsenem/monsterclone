<template>
  <div id="app">
    <div class="stellenAnzeige">
        <div class="wrapper">
        Mitarbeiter gesucht? Finden Sie passende Kandidaten mit Monster!  |
        <span>STELLENANZEIGE 4 TAGE KOSTENLOS SCHALTEN.</span>
      </div>
    </div>

    <div class="wrapper">
      <div class="logo">
        <b>M<span>O</span>NSTER</b>
        <div><i class="fa fa-user-circle-o" aria-hidden="true"></i></div>
      </div>
    </div>

    <div id="nav">
      <div class="wrapper spaceB">
        <div class="link">
          <router-link to="/">Jobs suchen</router-link> 
          <router-link to="/about">Karriereberatung</router-link>        
          <router-link to="/about">Lebenslauf hochladen</router-link>          
        </div>

        <div class="btn">
          <button>FÜR ARBEITGEBER</button>
        </div>
        
      </div>  
    </div>    
    

    <router-view />


    <footer>
      <div class="wrapper spaceB">
        <div class="spalte1">
          <select name="" id="">Deutschland</select>
        </div>
        <div class="spalte2 column">
            <h4>Für job suchende</h4>
            
              <a href="">Job-Navigator</a>
              <a href="">Karriereberatung</a>
              <a href="">Unternehmensprofile</a>
              <a href="">Hilfe</a>
        </div>
        <div class="spalte2 column">
            <h4>Für Arbeitgeber</h4>
            
              <a href="">Produkte</a>
              <a href="">Lösungen</a>
              <a href="">Preise</a>
              <a href="">HR Know-How</a>
              <a href="">Hilfe</a>
            
        </div>
        <div class="spalte2 column">
            <h4>Nützliche Links</h4>
            
              <a href="">Impressum</a>
              <a href="">Nutzungsbedingungen</a>
              <a href="">Datenschutz-Center</a>
              <a href="">Sicherheits-Center</a>
              <a href="">Barrierefreiheit</a>
              <a href="">Cookie-Einstellungen</a>
              <a href="">Werbungseinstellungen</a>
           
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
*{
  box-sizing:border-box;
  font-family: 'Segoe ui';
}
:root
{
  --primary: rgb(35, 9, 57);
  --secondary: rgb(250, 250, 250);

  --textLila: rgb(110, 70, 174);
  --btnLila: rgb(176, 81, 170);
  --gelb: rgba(253, 174, 0, 0.75);
  --gruen: rgb(0, 182, 180);
  --grau: rgb(242, 242, 242);

  --radius: 5px;
}
body
{
  color:rgb(33, 33, 33);
  margin:0;
}

.wrapper
{
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
}
.flex
{
  display:flex;
  align-items:center;
}
.spaceB
{
  display:flex;
  justify-content: space-between;
  align-items: center;
}
.column
{
  display:flex;
  flex-direction:column;
}
h1, h2, h3, h4, h5
{margin:0}

.stellenAnzeige
{
  background-color: var(--gelb);
  padding: 10px;
  text-align: center;
}
.stellenAnzeige span
{
  color:var(--textLila);
  font-weight: bolder;
}
.logo
{
  color: var(--textLila);
  font-size: 1.8em;
  padding: 20px 0;
}
.logo>b>span
{
  color: var(--gruen);
}

#nav {
  padding: 20px 0;
  background-color: var(--secondary);
}

#nav a {
  padding: 20px 0;
  color:rgb(33, 33, 33);
  text-decoration: none;
  margin-right: 50px;
  
}
#nav a:hover
{
  border-bottom: 2px solid var(--primary)
}
#nav .btn button
{
  padding: 8px 20px;
  cursor:pointer;
  outline:none;
  border: 1px solid var(--textLila);
  color:var(--textLila);
  font-weight: bold;
  font-size: 0.8em;
  border-radius: var(--radius);
}
#nav .btn button:hover
{
  color:white;
  background-color:var(--textLila);
}

footer
{
  background-color: var(--primary);
  padding: 80px;
}
footer .spaceB
{
  align-items: flex-start;
}
footer h4
{
  color:var(--gelb);
  margin-bottom: 10px;
}

footer a
{
  color:white;
  text-decoration: none;
  padding: 4px 0;
}
footer a:hover
{
  text-decoration: underline;
}
</style>
