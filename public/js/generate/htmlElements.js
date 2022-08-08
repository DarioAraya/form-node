//exportando html del menu
export const menuItem = `
<div class="grid-menu menu-title">
<span class="menu-title-top"> BARRERA Y GENTINA LIMITADA </span>
<span class="menu-title-bottom"> RUT 23479874-3</span>
</div>
<ul class="mdc-deprecated-list">  
<a href="#dataCompany">   
  <li class="mdc-deprecated-list-item menu" tabindex="0">     

      <span class="mdc-deprecated-list-item__ripple"></span>
      <span class="mdc-deprecated-list-item__text selected" id="company">Datos de la empresa</span>    

  </li>
</a>   
<a href="#dataAgent">     
  <li class="mdc-deprecated-list-item menu">

      <span class="mdc-deprecated-list-item__ripple"></span>
      <span class="mdc-deprecated-list-item__text" id="agent">Datos del representante legal</span> 

  </li>
</a>    
<li class="mdc-deprecated-list-item menu">
  <span class="mdc-deprecated-list-item__ripple"></span>
  <span class="mdc-deprecated-list-item__text">Datos para env&#237;o de la facturaci&#243;n</span>
</li>
<li class="mdc-deprecated-list-item menu">
  <span class="mdc-deprecated-list-item__ripple"></span>
  <span class="mdc-deprecated-list-item__text">&#191;Qui&#233;n implementar&#225; Bsale?</span>
</li>
<li class="mdc-deprecated-list-item menu">
  <span class="mdc-deprecated-list-item__ripple"></span>
  <span class="mdc-deprecated-list-item__text">Informaci&#243;n para tu proceso</span>
</li>
<li class="mdc-deprecated-list-item menu">
  <span class="mdc-deprecated-list-item__ripple"></span>
  <span class="mdc-deprecated-list-item__text">Informaci&#243;n para tus documentos</span>
</li>
<li class="mdc-deprecated-list-item menu">
  <span class="mdc-deprecated-list-item__ripple"></span>
  <span class="mdc-deprecated-list-item__text">Capacitaci&#243;n</span>
</li>
</ul>
`;

//exportando html del form
export const formsItem= `
        <!--Datos de la empresa-->
        <div class="grid-item grid-item-4 shadow" id="dataCompany">
        <div class="grid-form form-title title-top">${'Datos de la empresa'}</div>
        <!--Rut de la empresa-->
          <div class="grid-form rut">RUT de la empresa</div>
          <div class="grid-form form-input rut">
            <label class="mdc-text-field mdc-text-field--filled mdc-text-field--no-label" value="{{form}}" id="rut_empresa">
              <span class="mdc-text-field__ripple rut"></span>
                <input class="mdc-text-field__input rut" type="text" placeholder="Escriba texto" aria-label="Label" id="rutCompany"/>
              <span class="mdc-line-ripple rut"></span>
            </label>
            <div class="mdc-text-field-helper-line">
              <div class="mdc-text-field-helper-text" aria-hidden="true">
                Por Ejemplo
              </div>
            </div>
          </div>
        <!--Razon social-->
          <div class="grid-form razon">Raz&#243;n social</div>
          <div class="grid-form form-input razon">
            <label class="mdc-text-field mdc-text-field--filled mdc-text-field--no-label" id="razon_social">
              <span class="mdc-text-field__ripple razon"></span>
                <input class="mdc-text-field__input razon" type="text" placeholder="Escriba texto" aria-label="Label" id="socialReason"/>
              <span class="mdc-line-ripple razon"></span>
            </label>
            <div class="mdc-text-field-helper-line">
              <div class="mdc-text-field-helper-text" aria-hidden="true">
                Por Ejemplo
              </div>
            </div>
          </div>
        <!--Direccion de la empresa-->
          <div class="grid-form direccion">Direcci&#243;n de la empresa</div>
          <div class="grid-form form-input direccion">
            <label class="mdc-text-field mdc-text-field--filled mdc-text-field--no-label" id="#direccion">
              <span class="mdc-text-field__ripple direccion"></span>
                <input class="mdc-text-field__input direccion" type="text" placeholder="Escriba texto" aria-label="Label" id="addressCompany"/>
              <span class="mdc-line-ripple direccion"></span>
            </label>
            <div class="mdc-text-field-helper-line">
              <div class="mdc-text-field-helper-text" aria-hidden="true">
                Por Ejemplo
              </div>
            </div>
          </div>
        <!--Comuna-->
          <div class="grid-form comuna">Comuna</div>
          <div class="grid-form form-input comuna">
            <label class="mdc-text-field mdc-text-field--filled mdc-text-field--no-label" id="#comuna">
              <span class="mdc-text-field__ripple comuna"></span>
                <input class="mdc-text-field__input comuna" type="text" placeholder="Escriba texto" aria-label="Label" id="city"/>
              <span class="mdc-line-ripple comuna"></span>
            </label>
            <div class="mdc-text-field-helper-line">
              <div class="mdc-text-field-helper-text" aria-hidden="true">
                Por Ejemplo
              </div>
            </div>
          </div>
        <!--Actividad economica-->
          <div class="grid-form actividad">Actividad econ&#243;mica</div>
          <div class="grid-form form-input actividad">
            <label class="mdc-text-field mdc-text-field--filled mdc-text-field--no-label" id="#actividad">
              <span class="mdc-text-field__ripple actividad"></span>
                <input class="mdc-text-field__input actividad" type="text" placeholder="Escriba texto" aria-label="Label" id="economyActivity"/>
              <span class="mdc-line-ripple actividad"></span>
            </label>
            <div class="mdc-text-field-helper-line">
              <div class="mdc-text-field-helper-text" aria-hidden="true">
                Por Ejemplo
              </div>
            </div>
          </div>
        <!--Boton-->
          <div class="grid-form botton"></div>
          <div class="grid-form form-input form-button">
            <button class="mdc-button mdc-button--raised">
              <span class="mdc-button__label">ENVIAR</span>
            </button>
          </div>
        </div>
        </div>

        <!--Representante legal-->
        <div class="grid-item grid-item-5 shadow" id="dataAgent">
        <div class="grid-form form-title title-top">Datos del representante legal</div>
        <!--Rut representante-->
        <div class="grid-form legal">RUT del representante legal</div>
        <div class="grid-form form-input legal">
          <label class="mdc-text-field mdc-text-field--filled mdc-text-field--no-label" id="legal">
            <span class="mdc-text-field__ripple legal"></span>
            <input class="mdc-text-field__input legal" type="text" placeholder="Escriba texto" aria-label="Label"/>
            <span class="mdc-line-ripple legal"></span>
          </label>
          <div class="mdc-text-field-helper-line">
              <div class="mdc-text-field-helper-text" aria-hidden="true">
                Por Ejemplo
              </div>
          </div>
        </div>
        
        <!--Nombre representante-->
        <div class="grid-form nombre">Nombre del representante legal</div>
        <div class="grid-form form-input nombre">
          <label class="mdc-text-field mdc-text-field--filled mdc-text-field--no-label" id="nombre">
            <span class="mdc-text-field__ripple nombre"></span>
            <input class="mdc-text-field__input nombre" type="text" placeholder="Escriba texto" aria-label="Label"/>
            <span class="mdc-line-ripple nombre"></span>
          </label>
          <div class="mdc-text-field-helper-line">
              <div class="mdc-text-field-helper-text" aria-hidden="true">
                Por Ejemplo
              </div>
          </div>
        </div>
        
        <!--Email representante-->
        <div class="grid-form email">Email del representante legal</div>
        <div class="grid-form form-input email">
          <label class="mdc-text-field mdc-text-field--filled mdc-text-field--no-label" id="email">
            <span class="mdc-text-field__ripple email"></span>
            <input class="mdc-text-field__input email" type="text" placeholder="Escriba texto" aria-label="Label"/>
            <span class="mdc-line-ripple email"></span>
          </label>
          <div class="mdc-text-field-helper-line">
              <div class="mdc-text-field-helper-text" aria-hidden="true">
                Por Ejemplo
              </div>
          </div>
        </div>
        
        <!--Rut vigente-->
        <div class="grid-form rut-vigente">Rut vigente</div>
          <div class="grid-form form-input rut-vigente">
            <div class="grid-form input-attach front"> 
              <button id="attach_file" class="mdc-icon-button button1" aria-label="attach_file" aria-pressed="false">
              <div class="mdc-icon-button__ripple front"></div>
              <i class="material-icons mdc-icon-button__icon mdc-icon-button__icon--on" id="i_top">attach_file</i>
              <i class="material-icons mdc-icon-button__icon" id="i_top2">attach_file_border</i>
              </button>
              RUT parte frontal
            </div>
            <div class="grid-form input-attach back"> 
              <button id="attach_file" class="mdc-icon-button button2" aria-label="attach_file" aria-pressed="false">
              <div class="mdc-icon-button__ripple back"></div>
              <i class="material-icons mdc-icon-button__icon mdc-icon-button__icon--on" id="i_back">attach_file</i>
              <i class="material-icons mdc-icon-button__icon" id="i_back2">attach_file_border</i>
              </button>
              RUT parte trasera
            </div>
        </div>
        
        <!--Certificado digital-->
        <div class="grid-form certificado">¿Tiene certificado digital?</div>
        <div class="grid-form form-input certificado mdc-form-field">
          <div class="mdc-radio radio-1">
            <input class="mdc-radio__native-control radio-1" type="radio" id="radio-1" name="radios" checked>
            <div class="mdc-radio__background radio-1">
              <div class="mdc-radio__outer-circle radio-1"></div>
              <div class="mdc-radio__inner-circle radio-1"></div>
            </div>
            <div class="mdc-radio__ripple radio-1"></div>
          </div>
          <label for="radio-1" id="yes">Si</label>
        
        
          <div class="mdc-radio radio-2">
            <input class="mdc-radio__native-control radio-2" type="radio" id="radio-2" name="radios">
            <div class="mdc-radio__background radio-2">
              <div class="mdc-radio__outer-circle radio-2"></div>
              <div class="mdc-radio__inner-circle radio-2"></div>
            </div>
            <div class="mdc-radio__ripple radio-2"></div>
          </div>
          <label for="radio-2" id="no">No</label>
        </div>
        
        <!--Boton-->
        <div class="grid-form button-2"></div>
        <div class="grid-form form-input form-button button-2">
          <button class="mdc-button mdc-button--raised button-2">
            <span class="mdc-button__label button-2">ENVIAR</span>
          </button>
        </div>
        </div>
        
        `;

