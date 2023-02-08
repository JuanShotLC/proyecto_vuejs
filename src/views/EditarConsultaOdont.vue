<template>
  <div id="app">
    <hero-bar :has-right-visible="false">
      Consulta
    </hero-bar>
    <section class="section is-main-section">
      <TabNav
        :tabs="['Motivos Odontologicos', 'Antecedentes odontologicos', 'Exploración extraoral', 'Exploración intraoral']"
        :selected="selected" @selected="setSelected">
        <section class="tab-content">
        <Tab :is-selected="selected === 'Motivos Odontologicos'">
          <form>
            <div class="card">
              <div class="card-content">
                <div class="card">
                  <header class="card-header">
                    <p class="card-header-title">
                      Aspectos generales
                    </p>
                  </header>
                  <div class="card-content">
                    <div class="field">
                      <div class="field-body">
                        <div class="field is-grouped">
                          <div class="field">
                            <label class="is-small is-rounded">
                              <input type="checkbox" true-value="1" false-value="0" value="false">
                              <span class="check" /><span class="control-label"> Revisión</span></label>
                          </div>
                          <div class="field">
                            <label class="is-small is-rounded">
                              <input type="checkbox" true-value="1" false-value="0" value="false">
                              <span class="check" /><span class="control-label"> Caries</span></label>
                          </div>
                          <div class="field">
                            <label class="is-small is-rounded">
                              <input type="checkbox" true-value="1" false-value="0" value="false">
                              <span class="check" /><span class="control-label"> Extracción de diente</span></label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="field">
                      <div class="field-body">
                        <div class="field is-grouped">
                          <div class="field">
                            <label class="is-small is-rounded">
                              <input type="checkbox" true-value="1" false-value="0" value="false">
                              <span class="check" /><span class="control-label"> Control</span></label>
                          </div>
                          <div class="field">
                            <label class="is-small is-rounded">
                              <input type="checkbox" true-value="1" false-value="0" value="false">
                              <span class="check" /><span class="control-label"> Colocación de protesis
                                fija</span></label>
                          </div>
                          <div class="field">
                            <label class="is-small is-rounded">
                              <input type="checkbox" true-value="1" false-value="0" value="false">
                              <span class="check" /><span class="control-label"> Extracción de molar</span></label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="field">
                      <div class="field-body">
                        <div class="field is-grouped">
                          <div class="field">
                            <label class="is-small is-rounded">
                              <input type="checkbox" true-value="1" false-value="0" value="false">
                              <span class="check" /><span class="control-label"> Blanqueamiento</span></label>
                          </div>
                          <div class="field">
                            <label class="is-small is-rounded">
                              <input type="checkbox" true-value="1" false-value="0" value="false">
                              <span class="check" /><span class="control-label"> Colocación de protesis
                                removible</span></label>
                          </div>
                          <div class="field">
                            <label class="is-small is-rounded">
                              <input type="checkbox" true-value="1" false-value="0" value="false">
                              <span class="check" /><span class="control-label"> Fractura dental</span></label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="field">
                      <div class="field-body">
                        <div class="field is-grouped">
                          <div class="field">
                            <label class="is-small is-rounded">
                              <input type="checkbox" true-value="1" false-value="0" value="false">
                              <span class="check" /><span class="control-label"> Caída de diente</span></label>
                          </div>
                          <div class="field">
                            <label class="is-small is-rounded">
                              <input type="checkbox" true-value="1" false-value="0" value="false">
                              <span class="check" /><span class="control-label"> Colocación de ortodoncia</span></label>
                          </div>
                          <div class="field">
                            <label class="is-small is-rounded">
                              <input type="checkbox" true-value="1" false-value="0" value="false">
                              <span class="check" /><span class="control-label"> Limpieza dental</span></label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="field">
                      <div class="field-body">
                        <div class="field is-grouped">
                          <div class="field">
                            <label class="is-small is-rounded">
                              <input type="checkbox" true-value="1" false-value="0" value="false">
                              <span class="check" /><span class="control-label"> Caída de molar</span></label>
                          </div>
                          <div class="field">
                            <label class="is-small is-rounded">
                              <input type="checkbox" true-value="1" false-value="0" value="false">
                              <span class="check" /><span class="control-label"> Dolor de encías</span></label>
                          </div>
                          <div class="field">
                            <label class="is-small is-rounded">
                              <input type="checkbox" true-value="1" false-value="0" value="false">
                              <span class="check" /><span class="control-label"> Rompimiento de empaste</span></label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="field">
                      <div class="field-body">
                        <div class="field is-grouped">
                          <div class="field">
                            <label class="is-small is-rounded">
                              <input type="checkbox" true-value="1" false-value="0" value="false">
                              <span class="check" /><span class="control-label"> Caída de implante dental</span></label>
                          </div>
                          <div class="field">
                            <label class="is-small is-rounded">
                              <input type="checkbox" true-value="1" false-value="0" value="false">
                              <span class="check" /><span class="control-label"> Dolor de lengua</span></label>
                          </div>
                          <div class="field">
                            <label class="is-small is-rounded">
                              <input type="checkbox" true-value="1" false-value="0" value="false">
                              <span class="check" /><span class="control-label"> Sangrado de encías</span></label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="field">
                      <div class="field-body">
                        <div class="field is-grouped">
                          <div class="field">
                            <label class="is-small is-rounded">
                              <input type="checkbox" true-value="1" false-value="0" value="false">
                              <span class="check" /><span class="control-label"> Caída de implante molar</span></label>
                          </div>
                          <div class="field">
                            <label class="is-small is-rounded">
                              <input type="checkbox" true-value="1" false-value="0" value="false">
                              <span class="check" /><span class="control-label"> Dolor sublingual</span></label>
                          </div>
                          <div class="field">
                            <label class="is-small is-rounded">
                              <input type="checkbox" true-value="1" false-value="0" value="false"></label>
                            <div class="control is-small is-clearfix">
                              <input type="text" autocomplete="on" class="input is-small">
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="field">
                  <p class="control has-text-centered">
                    <button type="submit" class="button is-primary">
                      <span>Guardar Motivo</span>
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </form>
        </Tab>
        <Tab :is-selected="selected === 'Antecedentes odontologicos'">
          <form>
            <div class="card">
              <div class="card-content">
                <div class="card">
                  <header class="card-header">
                    <p class="card-header-title">
                      Antecedentes Dentales
                    </p>
                  </header>
                  <div class="card-content">
                    <div class="field">
                      <div class="field-body">
                        <div class="field is-grouped">
                          <div class="field">
                            <label class="switch is-small is-rounded">
                              <input type="checkbox" value="false">
                              <span class="check" /><span class="control-label">Aparición de dientes
                                prematuramente</span></label>
                          </div>
                          <div class="field is-expanded is-floating-label" v-show="mtr">
                            <label class="label">Comentario</label>
                            <div class="control is-small is-clearfix">
                              <input type="text" autocomplete="on" class="input is-small">
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="field">
                      <div class="field-body">
                        <div class="field is-grouped">
                          <div class="field">
                            <label class="switch is-small is-rounded"><input type="checkbox" true-value="1"
                                false-value="0" value="false"><span class="check" /><span
                                class="control-label">Extracción de dientes primarios sin estar flojos</span></label>
                          </div>
                          <div class="field is-expanded is-floating-label">
                            <label class="label">Comentario</label>
                            <div class="control is-small is-clearfix">
                              <input type="text" autocomplete="on" class="input is-small">
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="field">
                      <div class="field-body">
                        <div class="field is-grouped">
                          <div class="field">
                            <label class="switch is-small is-rounded"><input type="checkbox" true-value="1"
                                false-value="0" value="false"><span class="check" /><span class="control-label">Dientes
                                supernumerarios congénitos</span></label>
                          </div>
                          <div class="field is-expanded is-floating-label">
                            <label class="label">Comentario</label>
                            <div class="control is-small is-clearfix">
                              <input type="text" autocomplete="on" class="input is-small">
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="field">
                      <div class="field-body">
                        <div class="field is-grouped">
                          <div class="field">
                            <label class="switch is-small is-rounded"><input type="checkbox" true-value="1"
                                false-value="0" value="false"><span class="check" /><span class="control-label">Dientes
                                faltantes congénitos</span></label>
                          </div>
                          <div class="field is-expanded is-floating-label">
                            <label class="label">Comentario</label>
                            <div class="control is-small is-clearfix">
                              <input type="text" autocomplete="on" class="input is-small">
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="field">
                      <div class="field-body">
                        <div class="field is-grouped">
                          <div class="field">
                            <label class="switch is-small is-rounded"><input type="checkbox" true-value="1"
                                false-value="0" value="false"><span class="check" /><span class="control-label">Dientes
                                primarios, rotos o dañados</span></label>
                          </div>
                          <div class="field is-expanded is-floating-label">
                            <label class="label">Comentario</label>
                            <div class="control is-small is-clearfix">
                              <input type="text" autocomplete="on" class="input is-small">
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="field">
                      <div class="field-body">
                        <div class="field is-grouped">
                          <div class="field">
                            <label class="switch is-small is-rounded"><input type="checkbox" true-value="1"
                                false-value="0" value="false"><span class="check" /><span class="control-label">Dientes
                                permanentes rotos o dañados</span></label>
                          </div>
                          <div class="field is-expanded is-floating-label">
                            <label class="label">Comentario</label>
                            <div class="control is-small is-clearfix">
                              <input type="text" autocomplete="on" class="input is-small">
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="field">
                      <div class="field-body">
                        <div class="field is-grouped">
                          <div class="field">
                            <label class="switch is-small is-rounded"><input type="checkbox" true-value="1"
                                false-value="0" value="false">
                              <span class="check" /><span class="control-label">Dientes con alta sensibilidad</span>
                            </label>
                          </div>
                          <div class="field is-expanded is-floating-label">
                            <label class="label">Comentario</label>
                            <div class="control is-small is-clearfix">
                              <input type="text" autocomplete="on" class="input is-small">
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <header class="card-header">
                    <p class="card-header-title">
                      Tratamientos dentales realizados
                    </p>
                  </header>
                  <div class="card-content">
                    <div class="field">
                      <div class="field-body">
                        <div class="field is-grouped">
                          <div class="field">
                            <label class="switch is-small is-rounded">
                              <input type="checkbox" true-value="1" false-value="0" value="false">
                              <span class="check" /><span class="control-label">Empastes</span></label>
                          </div>
                          <div class="field is-expanded is-floating-label">
                            <label class="label">Comentario</label>
                            <div class="control is-small is-clearfix">
                              <input type="text" autocomplete="on" class="input is-small">
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="field">
                      <div class="field-body">
                        <div class="field is-grouped">
                          <div class="field">
                            <label class="switch is-small is-rounded"><input type="checkbox" true-value="1"
                                false-value="0" value="false"><span class="check" /><span
                                class="control-label">Fracturas</span></label>
                          </div>
                          <div class="field is-expanded is-floating-label">
                            <label class="label">Comentario</label>
                            <div class="control is-small is-clearfix">
                              <input type="text" autocomplete="on" class="input is-small">
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="field">
                      <div class="field-body">
                        <div class="field is-grouped">
                          <div class="field">
                            <label class="switch is-small is-rounded"><input type="checkbox" true-value="1"
                                false-value="0" value="false"><span class="check" /><span
                                class="control-label">Tratamiento de conducto</span></label>
                          </div>
                          <div class="field is-expanded is-floating-label">
                            <label class="label">Comentario</label>
                            <div class="control is-small is-clearfix">
                              <input type="text" autocomplete="on" class="input is-small">
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="field">
                      <div class="field-body">
                        <div class="field is-grouped">
                          <div class="field">
                            <label class="switch is-small is-rounded"><input type="checkbox" true-value="1"
                                false-value="0" value="false"><span class="check" /><span
                                class="control-label">Pulpotomía</span></label>
                          </div>
                          <div class="field is-expanded is-floating-label">
                            <label class="label">Comentario</label>
                            <div class="control is-small is-clearfix">
                              <input type="text" autocomplete="on" class="input is-small">
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="field">
                      <div class="field-body">
                        <div class="field is-grouped">
                          <div class="field">
                            <label class="switch is-small is-rounded"><input type="checkbox" true-value="1"
                                false-value="0" value="false"><span class="check" /><span
                                class="control-label">Protesis</span></label>
                          </div>
                          <div class="field is-expanded is-floating-label">
                            <label class="label">Comentario</label>
                            <div class="control is-small is-clearfix">
                              <input type="text" autocomplete="on" class="input is-small">
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="field">
                      <div class="field-body">
                        <div class="field is-grouped">
                          <div class="field">
                            <label class="switch is-small is-rounded"><input type="checkbox" true-value="1"
                                false-value="0" value="false"><span class="check" /><span
                                class="control-label">Endodoncia</span></label>
                          </div>
                          <div class="field is-expanded is-floating-label">
                            <label class="label">Comentario</label>
                            <div class="control is-small is-clearfix">
                              <input type="text" autocomplete="on" class="input is-small">
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="field">
                      <div class="field-body">
                        <div class="field is-grouped">
                          <div class="field">
                            <label class="switch is-small is-rounded"><input type="checkbox" true-value="1"
                                false-value="0" value="false">
                              <span class="check" /><span class="control-label">Ortodoncia</span>
                            </label>
                          </div>
                          <div class="field is-expanded is-floating-label">
                            <label class="label">Comentario</label>
                            <div class="control is-small is-clearfix">
                              <input type="text" autocomplete="on" class="input is-small">
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="field">
                      <div class="field-body">
                        <div class="field is-grouped">
                          <div class="field">
                            <label class="switch is-small is-rounded"><input type="checkbox" true-value="1"
                                false-value="0" value="false">
                              <span class="check" /><span class="control-label">Retenedores</span>
                            </label>
                          </div>
                          <div class="field is-expanded is-floating-label">
                            <label class="label">Comentario</label>
                            <div class="control is-small is-clearfix">
                              <input type="text" autocomplete="on" class="input is-small">
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <header class="card-header">
                    <p class="card-header-title">
                      Tratamientos y padecimientos no dentales
                    </p>
                  </header>
                  <div class="card-content">
                    <div class="field">
                      <div class="field-body">
                        <div class="field is-grouped">
                          <div class="field">
                            <label class="switch is-small is-rounded"><input type="checkbox" true-value="1"
                                false-value="0" value="false"><span class="check" /><span
                                class="control-label">Quistes</span></label>
                          </div>
                          <div class="field">
                            <input type="checkbox" true-value="1" false-value="0"><span class="check" /><span
                              class="control-label"> Padecido</span>
                          </div>
                          <div class="field">
                            <input type="checkbox" true-value="1" false-value="0"><span class="check" /><span
                              class="control-label"> Tratado</span>
                          </div>
                          <div class="field">
                            <input type="checkbox" true-value="1" false-value="0"><span class="check" /><span
                              class="control-label"> Ambos</span>
                          </div>
                          <div class="field is-expanded is-floating-label">
                            <label class="label">Comentario</label>
                            <div class="control is-small is-clearfix">
                              <input type="text" autocomplete="on" class="input is-small">
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="field">
                      <div class="field-body">
                        <div class="field is-grouped">
                          <div class="field">
                            <label class="switch is-small is-rounded"><input type="checkbox" true-value="1"
                                false-value="0" value="false"><span class="check" /><span
                                class="control-label">Infección mandibular</span></label>
                          </div>
                          <div class="field">
                            <input type="checkbox" true-value="1" false-value="0"><span class="check" /><span
                              class="control-label"> Padecido</span>
                          </div>
                          <div class="field">
                            <input type="checkbox" true-value="1" false-value="0"><span class="check" /><span
                              class="control-label"> Tratado</span>
                          </div>
                          <div class="field">
                            <input type="checkbox" true-value="1" false-value="0"><span class="check" /><span
                              class="control-label"> Ambos</span>
                          </div>
                          <div class="field is-expanded is-floating-label">
                            <label class="label">Comentario</label>
                            <div class="control is-small is-clearfix">
                              <input type="text" autocomplete="on" class="input is-small">
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="field">
                      <div class="field-body">
                        <div class="field is-grouped">
                          <div class="field">
                            <label class="switch is-small is-rounded"><input type="checkbox" true-value="1"
                                false-value="0" value="false"><span class="check" /><span class="control-label">Llagas
                                y/o herpes labial</span></label>
                          </div>
                          <div class="field">
                            <input type="checkbox" true-value="1" false-value="0"><span class="check" /><span
                              class="control-label"> Padecido</span>
                          </div>
                          <div class="field">
                            <input type="checkbox" true-value="1" false-value="0"><span class="check" /><span
                              class="control-label"> Tratado</span>
                          </div>
                          <div class="field">
                            <input type="checkbox" true-value="1" false-value="0"><span class="check" /><span
                              class="control-label"> Ambos</span>
                          </div>
                          <div class="field is-expanded is-floating-label">
                            <label class="label">Comentario</label>
                            <div class="control is-small is-clearfix">
                              <input type="text" autocomplete="on" class="input is-small">
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="field">
                      <div class="field-body">
                        <div class="field is-grouped">
                          <div class="field">
                            <label class="switch is-small is-rounded"><input type="checkbox" true-value="1"
                                false-value="0" value="false"><span class="check" /><span
                                class="control-label">Muget</span></label>
                          </div>
                          <div class="field">
                            <input type="checkbox" true-value="1" false-value="0"><span class="check" /><span
                              class="control-label"> Padecido</span>
                          </div>
                          <div class="field">
                            <input type="checkbox" true-value="1" false-value="0"><span class="check" /><span
                              class="control-label"> Tratado</span>
                          </div>
                          <div class="field">
                            <input type="checkbox" true-value="1" false-value="0"><span class="check" /><span
                              class="control-label"> Ambos</span>
                          </div>
                          <div class="field is-expanded is-floating-label">
                            <label class="label">Comentario</label>
                            <div class="control is-small is-clearfix">
                              <input type="text" autocomplete="on" class="input is-small">
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <header class="card-header">
                    <p class="card-header-title">
                      Otros Antecedentes Orales
                    </p>
                  </header>
                  <div class="card-content">
                    <div class="field">
                      <div class="field-body">
                        <div class="field is-grouped">
                          <div class="field">
                            <label class="switch is-small is-rounded">
                              <input type="checkbox" true-value="1" false-value="0" value="false">
                              <span class="check" /><span class="control-label">Succión digital</span></label>
                          </div>
                          <div class="field is-expanded is-floating-label">
                            <label class="label">Comentario</label>
                            <div class="control is-small is-clearfix">
                              <input type="text" autocomplete="on" class="input is-small">
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="field">
                      <div class="field-body">
                        <div class="field is-grouped">
                          <div class="field">
                            <label class="switch is-small is-rounded"><input type="checkbox" true-value="1"
                                false-value="0" value="false"><span class="check" /><span
                                class="control-label">Respiración bucal</span></label>
                          </div>
                          <div class="field is-expanded is-floating-label">
                            <label class="label">Comentario</label>
                            <div class="control is-small is-clearfix">
                              <input type="text" autocomplete="on" class="input is-small">
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="field">
                      <div class="field-body">
                        <div class="field is-grouped">
                          <div class="field">
                            <label class="switch is-small is-rounded"><input type="checkbox" true-value="1"
                                false-value="0" value="false"><span class="check" /><span class="control-label">Mordida
                                desviada</span></label>
                          </div>
                          <div class="field is-expanded is-floating-label">
                            <label class="label">Comentario</label>
                            <div class="control is-small is-clearfix">
                              <input type="text" autocomplete="on" class="input is-small">
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="field">
                      <div class="field-body">
                        <div class="field is-grouped">
                          <div class="field">
                            <label class="switch is-small is-rounded"><input type="checkbox" true-value="1"
                                false-value="0" value="false"><span class="check" /><span
                                class="control-label">Bruxismo</span></label>
                          </div>
                          <div class="field is-expanded is-floating-label">
                            <label class="label">Comentario</label>
                            <div class="control is-small is-clearfix">
                              <input type="text" autocomplete="on" class="input is-small">
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <header class="card-header">
                    <p class="card-header-title">
                      Complicaciones con tratamientos
                    </p>
                  </header>
                  <div class="card-content">
                    <div class="field">
                      <div class="field-body">
                        <div class="field is-grouped">
                          <div class="field">
                            <label class="switch is-small is-rounded">
                              <input type="checkbox" true-value="1" false-value="0" value="false">
                              <span class="check" /><span class="control-label">Complicación</span></label>
                          </div>
                          <div class="field">
                            <v-icon class="is-small mdi mdi-plus is-primary" @click="addInput" />
                          </div>
                          <div class="field is-expanded is-floating-label">
                            <label class="label">Nombre</label>
                            <div class="control is-small is-clearfix">
                              <input type="text" autocomplete="on" class="input is-small">
                            </div>
                          </div>
                          <div class="field">
                            <input type="checkbox" true-value="1" false-value="0"><span class="check" /><span
                              class="control-label"> En procedimiento</span>
                          </div>
                          <div class="field">
                            <input type="checkbox" true-value="1" false-value="0"><span class="check" /><span
                              class="control-label"> En tratamiento</span>
                          </div>
                          <div class="field is-expanded is-floating-label">
                            <label class="label">Comentario</label>
                            <div class="control is-small is-clearfix">
                              <input type="text" autocomplete="on" class="input is-small">
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div v-for="(field, i) in inputs" :key="field" class="field">
                      <div class="field-body">
                        <div class="field is-grouped">
                          <div class="field">
                            <v-icon class="is-small mdi mdi-minus is-primary" @click="remove(i)" />
                          </div>
                          <div class="field is-expanded is-floating-label">
                            <label class="label">Nombre</label>
                            <div class="control is-small is-clearfix">
                              <input v-model="field.result" type="text" autocomplete="on" class="input is-small">
                            </div>
                          </div>
                          <div class="field">
                            <input v-model="field.result" type="checkbox" true-value="1" false-value="0"><span
                              class="check" /><span class="control-label"> En procedimiento</span>
                          </div>
                          <div class="field">
                            <input v-model="field.result" type="checkbox" true-value="1" false-value="0"><span
                              class="check" /><span class="control-label"> En tratamiento</span>
                          </div>
                          <div class="field is-expanded is-floating-label">
                            <label class="label">Comentario</label>
                            <div class="control is-small is-clearfix">
                              <input v-model="field.result" type="text" autocomplete="on" class="input is-small">
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="field">
                      <div class="field-body">
                        <div class="field is-grouped">
                          <div class="field">
                            <label class="switch is-small is-rounded"><input type="checkbox" true-value="1"
                                false-value="0" value="false"><span class="check" /><span class="control-label">Otros
                                antecedentes</span></label>
                          </div>
                          <div class="field">
                            <v-icon class="is-small mdi mdi-plus is-primary" @click="addInput" />
                          </div>
                          <div class="field is-expanded is-floating-label">
                            <label class="label">Nombre</label>
                            <div class="control is-small is-clearfix">
                              <input type="text" autocomplete="on" class="input is-small">
                            </div>
                          </div>
                          <div class="field is-expanded is-floating-label">
                            <label class="label">Comentario</label>
                            <div class="control is-small is-clearfix">
                              <input type="text" autocomplete="on" class="input is-small">
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="field">
                      <div class="field-body">
                        <div class="field is-grouped">
                          <div class="field is-expanded is-floating-label">
                            <label class="label">Comentario</label>
                            <div class="control is-small is-clearfix">
                              <input type="text" autocomplete="on" class="input is-large">
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="field">
                  <p class="control has-text-centered">
                    <button type="submit" class="button is-primary">
                      <span>Guardar Motivo</span>
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </form>
        </Tab>
        <Tab :is-selected="selected === 'Exploración extraoral'">
          <form>
            <div class="card">
              <div class="card-content">
                <div class="card">
                  <header class="card-header">
                    <p class="card-header-title">
                      Detección visual
                    </p>
                  </header>
                  <div class="card-content">
                    <div class="field">
                      <div class="field-body">
                        <div class="field is-grouped">
                          <div class="field">
                            <label class="is-small is-rounded">
                              <input type="checkbox" true-value="1" false-value="0" value="false">
                              <span class="check" /><span class="control-label"> Asimetrias faciales</span></label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="field">
                      <div class="field-body">
                        <div class="field is-grouped">
                          <div class="field">
                            <label class="is-small is-rounded">
                              <input type="checkbox" true-value="1" false-value="0" value="false">
                              <span class="check" /><span class="control-label"> Alteración color de piel</span></label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="field">
                      <div class="field-body">
                        <div class="field is-grouped">
                          <div class="field">
                            <label class="is-small is-rounded">
                              <input type="checkbox" true-value="1" false-value="0" value="false">
                              <span class="check" /><span class="control-label"> Alteración color de ojos</span></label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="field">
                      <div class="field-body">
                        <div class="field is-grouped">
                          <div class="field">
                            <label class="is-small is-rounded">
                              <input type="checkbox" true-value="1" false-value="0" value="false">
                              <span class="check" /><span class="control-label"> Inflamaciones y/o
                                entumefacciones</span></label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="field">
                      <div class="field-body">
                        <div class="field is-grouped">
                          <div class="field">
                            <label class="is-small is-rounded">
                              <input type="checkbox" true-value="1" false-value="0" value="false">
                              <span class="check" /><span class="control-label"> Abcesos</span></label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="field">
                      <div class="field-body">
                        <div class="field is-grouped">
                          <div class="field">
                            <label class="is-small is-rounded">
                              <input type="checkbox" true-value="1" false-value="0" value="false">
                              <span class="check" /><span class="control-label"> Fístulas</span></label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <header class="card-header">
                    <p class="card-header-title">
                      Detección de alteraciones por palpación
                    </p>
                  </header>
                  <div class="card-content">
                    <div class="field">
                      <div class="field-body">
                        <div class="field is-grouped">
                          <div class="field">
                            <label class="is-small is-rounded">
                              <input type="checkbox" true-value="1" false-value="0" value="false">
                              <span class="check" /><span class="control-label"> Masetero</span></label>
                          </div>
                          <div class="field">
                            <label class="is-small is-rounded">
                              <input type="checkbox" true-value="1" false-value="0" value="false">
                              <span class="check" /><span class="control-label"> Temporal</span></label>
                          </div>
                          <div class="field">
                            <label class="is-small is-rounded">
                              <input type="checkbox" true-value="1" false-value="0" value="false">
                              <span class="check" /><span class="control-label"> Pterigoideo interno</span></label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="field">
                      <div class="field-body">
                        <div class="field is-grouped">
                          <div class="field">
                            <label class="switch is-small is-rounded">
                              <input type="checkbox" value="false">
                              <span class="check" /><span class="control-label">ATM</span></label>
                          </div>
                          <div class="field">
                            <label class="is-small is-rounded">
                              <input type="checkbox" true-value="1" false-value="0" value="false">
                              <span class="check" /><span class="control-label"> Chasquido</span></label>
                          </div>
                          <div class="field">
                            <label class="is-small is-rounded">
                              <input type="checkbox" true-value="1" false-value="0" value="false">
                              <span class="check" /><span class="control-label"> Resistencia</span></label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="field">
                      <div class="field-body">
                        <div class="field is-grouped">
                          <div class="field">
                            <label class="is-small is-rounded">
                              <input type="checkbox" true-value="1" false-value="0" value="false">
                              <span class="check" /><span class="control-label"> Adenopatía</span></label>
                          </div>
                          <div class="field">
                            <label class="is-small is-rounded">
                              <input type="checkbox" true-value="1" false-value="0" value="false">
                              <span class="check" /><span class="control-label"> Base sub mandibular</span></label>
                          </div>
                          <div class="field">
                            <label class="is-small is-rounded">
                              <input type="checkbox" true-value="1" false-value="0" value="false">
                              <span class="check" /><span class="control-label"> Mentoniana</span></label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="field">
                      <div class="field-body">
                        <div class="field is-grouped">
                          <div class="field">
                            <label class="is-small is-rounded">
                              <input type="checkbox" true-value="1" false-value="0" value="false">
                              <span class="check" /><span class="control-label"> Glandula Salival
                                parotida</span></label>
                          </div>
                          <div class="field">
                            <label class="is-small is-rounded">
                              <input type="checkbox" true-value="1" false-value="0" value="false">
                              <span class="check" /><span class="control-label"> Glandula submandibular</span></label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="field">
                  <p class="control has-text-centered">
                    <button type="submit" class="button is-primary">
                      <span>Guardar Motivo</span>
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </form>
        </Tab>
        <Tab :is-selected="selected === 'Exploración intraoral'">
          <form>
            <div class="card">
              <div class="card-content">
                <div class="card">
                  <header class="card-header">
                    <p class="card-header-title">
                      Tipo de labio
                    </p>
                  </header>
                  <div class="card-content">
                    <div class="field-body">
                      <div class="field has-addons">
                        <span class="control-label">Labio fino </span>
                        <label data-v-b105773e="" class="b-radio radio is-small">
                          <input type="radio" name="diabetes" value="personal">
                          <span class="check"></span>
                        </label>
                        <span class="control-label">Labio fino </span>
                        <label data-v-b105773e="" class="b-radio radio is-small">
                          <input type="radio" name="diabetes" value="personal">
                          <span class="check"></span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <header class="card-header">
                    <p class="card-header-title">
                      Alteraciones detectadas
                    </p>
                  </header>
                  <div class="card-content">
                    <div class="field">
                      <div class="field-body">
                        <div class="field is-grouped">
                          <div class="field">
                            <label class="is-small is-rounded">
                              <input type="checkbox" true-value="1" false-value="0" value="false">
                              <span class="check" /><span class="control-label"> Hendidura de fulcrum</span></label>
                          </div>
                          <div class="field">
                            <label class="is-small is-rounded">
                              <input type="checkbox" true-value="1" false-value="0" value="false">
                              <span class="check" /><span class="control-label"> Glandulas fordyces</span></label>
                          </div>
                          <div class="field">
                            <label class="is-small is-rounded">
                              <input type="checkbox" true-value="1" false-value="0" value="false">
                              <span class="check" /><span class="control-label"> Encía adherida</span></label>
                          </div>
                          <div class="field">
                            <label class="is-small is-rounded">
                              <input type="checkbox" true-value="1" false-value="0" value="false">
                              <span class="check" /><span class="control-label"> Lateral lingual</span></label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="field">
                      <div class="field-body">
                        <div class="field is-grouped">
                          <div class="field">
                            <label class="is-small is-rounded">
                              <input type="checkbox" true-value="1" false-value="0" value="false">
                              <span class="check" /><span class="control-label"> Columnelas de fulcrum</span></label>
                          </div>
                          <div class="field">
                            <label class="is-small is-rounded">
                              <input type="checkbox" true-value="1" false-value="0" value="false">
                              <span class="check" /><span class="control-label"> Perdida de dimensión
                                vertical</span></label>
                          </div>
                          <div class="field">
                            <label class="is-small is-rounded">
                              <input type="checkbox" true-value="1" false-value="0" value="false">
                              <span class="check" /><span class="control-label"> Encía movil</span></label>
                          </div>
                          <div class="field">
                            <label class="is-small is-rounded">
                              <input type="checkbox" true-value="1" false-value="0" value="false">
                              <span class="check" /><span class="control-label"> Frenillo lingual</span></label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="field">
                      <div class="field-body">
                        <div class="field is-grouped">
                          <div class="field">
                            <label class="is-small is-rounded">
                              <input type="checkbox" true-value="1" false-value="0" value="false">
                              <span class="check" /><span class="control-label"> Arco de cupido</span></label>
                          </div>
                          <div class="field">
                            <label class="is-small is-rounded">
                              <input type="checkbox" true-value="1" false-value="0" value="false">
                              <span class="check" /><span class="control-label"> Colapso de tejidos
                                blandos</span></label>
                          </div>
                          <div class="field">
                            <label class="is-small is-rounded">
                              <input type="checkbox" true-value="1" false-value="0" value="false">
                              <span class="check" /><span class="control-label"> Paladar blando</span></label>
                          </div>
                          <div class="field">
                            <label class="is-small is-rounded">
                              <input type="checkbox" true-value="1" false-value="0" value="false">
                              <span class="check" /><span class="control-label"> Conducto de Warton</span></label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="field">
                      <div class="field-body">
                        <div class="field is-grouped">
                          <div class="field">
                            <label class="is-small is-rounded">
                              <input type="checkbox" true-value="1" false-value="0" value="false">
                              <span class="check" /><span class="control-label"> Borde Bermelion</span></label>
                          </div>
                          <div class="field">
                            <label class="is-small is-rounded">
                              <input type="checkbox" true-value="1" false-value="0" value="false">
                              <span class="check" /><span class="control-label"> Incompetencia labial</span></label>
                          </div>
                          <div class="field">
                            <label class="is-small is-rounded">
                              <input type="checkbox" true-value="1" false-value="0" value="false">
                              <span class="check" /><span class="control-label"> Paladar duro</span></label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="field">
                      <div class="field-body">
                        <div class="field is-grouped">
                          <div class="field">
                            <label class="is-small is-rounded">
                              <input type="checkbox" true-value="1" false-value="0" value="false">
                              <span class="check" /><span class="control-label"> Comisuras</span></label>
                          </div>
                          <div class="field">
                            <label class="is-small is-rounded">
                              <input type="checkbox" true-value="1" false-value="0" value="false">
                              <span class="check" /><span class="control-label"> Labios secos</span></label>
                          </div>
                          <div class="field">
                            <label class="is-small is-rounded">
                              <input type="checkbox" true-value="1" false-value="0" value="false">
                              <span class="check" /><span class="control-label"> Ruber palatinos</span></label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="field">
                      <div class="field-body">
                        <div class="field is-grouped">
                          <div class="field">
                            <label class="is-small is-rounded">
                              <input type="checkbox" true-value="1" false-value="0" value="false">
                              <span class="check" /><span class="control-label"> Mucosa de transición</span></label>
                          </div>
                          <div class="field">
                            <label class="is-small is-rounded">
                              <input type="checkbox" true-value="1" false-value="0" value="false">
                              <span class="check" /><span class="control-label"> Labios Agrietados</span></label>
                          </div>
                          <div class="field">
                            <label class="is-small is-rounded">
                              <input type="checkbox" true-value="1" false-value="0" value="false">
                              <span class="check" /><span class="control-label"> Dorso lingual</span></label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="field">
                      <div class="field-body">
                        <div class="field is-grouped">
                          <div class="field is-expanded is-floating-label">
                            <label class="label">Comentario</label>
                            <div class="control is-small is-clearfix">
                              <input type="text" autocomplete="on" class="input is-large">
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="field">
                  <p class="control has-text-centered">
                    <button type="submit" class="button is-primary">
                      <span>Guardar Motivo</span>
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </form>
        </Tab>
        </section>
      </TabNav>
    </section>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import HeroBar from '@/components/HeroBar.vue'
import TabNav from '@/components/TabNav.vue'
import Tab from '@/components/Tab.vue'

export default defineComponent({
  name: 'EditarConsultaOdontologica',
  components: {
    HeroBar,
    TabNav,
    Tab
  },
  data () {
    return {
      selected: 'Motivos Odontologicos',
      inputs: []
    }
  },
  methods: {
    setSelected (tab) {
      this.selected = tab
    },
    addInput: function () {
      this.inputs.push({
        result: null
      })
    },
    remove: function (i) {
      this.inputs.splice(i, 1)
    },
    save: function () {
      console.log(this.inputs)
    }
  }
})
</script>
