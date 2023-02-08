<template>
  <div>
    <hero-bar :has-right-visible="false">
      Nuevo Expediente
    </hero-bar>
    <section class="section is-main-section">
      <div class="container">
        <div class="columns">
          <div class="column is-half">
            <div class="card">
              <header class="card-header">
                <p class="card-header-title"> Datos generales </p>
              </header>
              <div class="card-content">
                <div class="field">
                  <div class="field-body">
                    <div class="field is-grouped">
                      <div class="field is-floating-label"><label class="label">Nombre</label>
                        <div class="control is-small is-clearfix"><input type="text" autocomplete="on"
                            required="required" class="input is-small"></div>
                      </div>
                      <div class="field is-floating-label"><label class="label">Apellido</label>
                        <div class="control is-small is-clearfix"><input type="text" autocomplete="on"
                            required="required" class="input is-small"></div>
                      </div>
                      <div class="field">
                        <div class="field-body">
                          <div class="field has-addons"><label class="b-radio radio is-small"><input type="radio"
                                value="M"><span class="check"></span><span class="control-label">M</span></label><label
                              class="b-radio radio is-small"><input type="radio" value="F"><span
                                class="check"></span><span class="control-label">F</span></label></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="field">
                  <div class="field-body">
                    <div class="field is-grouped">
                      <div class="field is-floating-label"><label class="label">Documento</label>
                        <div class="field-body">
                          <div class="field has-addons">
                            <div class="control"><span class="select is-small"><select required="required">
                                  <option value="V">V</option>
                                  <option value="E">E</option>
                                  <option value="J">J</option>
                                </select></span></div>
                            <div class="control is-small is-clearfix">
                              <input type="text" autocomplete="on" required="required" class="input is-small"></div>
                          </div>
                        </div>
                      </div>
                      <div class="field is-floating-label"><label class="label">Fecha Nac</label>
                        <b-datepicker ref="datepicker" expanded placeholder="Select a date" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="column is-half">
            <div class="card">
              <header class="card-header">
                  <p class="card-header-title"> Datos de contacto </p>
              </header>
              <div class="card-content">
                  <div class="field is-expanded is-floating-label"><label class="label">E-mail</label>
                      <div class="control is-small is-clearfix"><input type="email" autocomplete="on" required="required"
                              class="input is-small"></div>
                  </div>
                  <div class="field">
                      <div class="field-body">
                          <div class="field is-grouped">
                              <div class="field is-flex-shrink-1-NOT is-floating-label"><label class="label">Número
                                      teléfono</label>
                                  <div class="control is-small is-clearfix"><input type="text" autocomplete="on"
                                          required="required" class="input is-small"></div>
                              </div>
                              <div class="field"><label class="switch is-small is-rounded">
                                <input type="checkbox" value="false" v-model="toggle">
                                <span class="check"></span>
                                <span class="control-label">Aplica para WhatsApp</span></label></div>
                          </div>
                      </div>
                  </div>
                  <div class="field">
    <div class="field-body">
        <div class="field is-grouped" v-if="toggle">
            <div class="field is-floating-label"><label class="label">Número Whatsapp</label>
                <div class="control is-small is-expanded is-clearfix"><input type="text" autocomplete="on"
                        required="required" class="input is-small"></div>
            </div>
        </div>
    </div>
</div>
              </div>
            </div>
          </div>
        </div>
        <TabNav
          :tabs="['Datos de residencia', 'Datos de pareja', 'Datos de ocupación', 'Antecedentes patológicos', 'Actividades física', 'Hábitos de consumo', 'Estética', 'Carácteristicas físicas', 'Asp Emocional y Alimenticio']"
          :selected="selected" @selected="setSelected">
          <section class="tab-content">
          <Tab :is-selected="selected === 'Datos de residencia'">
            <div>
              <div class="field">
                <div class="field-body">
                  <div class="field is-grouped">
                    <div class="field is-expanded is-floating-label"><label class="label">Dirección</label>
                      <div class="control is-small is-clearfix"><input type="text" autocomplete="on"
                          class="input is-small"></div>
                    </div>
                    <div class="field is-floating-label"><label class="label">Localidad</label>
                      <div class="control is-small is-clearfix"><input type="text" autocomplete="on"
                          class="input is-small"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="field">
                <div class="field-body">
                  <div class="field is-grouped">
                    <div class="field is-floating-label"><label class="label">Ciudad</label>
                      <div class="control is-small is-clearfix"><input type="text" autocomplete="on"
                          class="input is-small"></div>
                    </div>
                    <div class="field is-floating-label"><label class="label">Estado</label>
                      <div class="control is-small is-clearfix"><input type="text" autocomplete="on"
                          class="input is-small"></div>
                    </div>
                    <div class="field is-floating-label"><label class="label">País</label>
                      <div class="control is-small is-clearfix"><input type="text" autocomplete="on"
                          class="input is-small"></div>
                    </div>
                    <div class="field is-short is-floating-label"><label class="label">Tiempo residiendo</label>
                      <div class="control is-small is-clearfix"><input type="text" autocomplete="on"
                          class="input is-small"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="field">
                <div class="field-body">
                  <div class="field is-grouped">
                    <div class="field"><label class="b-checkbox checkbox is-small">
                      <input type="checkbox" autocomplete="on" v-model="toggle1" value="false">
                      <span class="check"></span><span class="control-label">Agua potable</span></label>
                    </div>
                    <div class="field is-floating-label" v-if="toggle1"><label class="label">Frecuencia agua potable</label>
                      <div class="control"><span class="select is-small is-empty"><select>
                        <option disabled="disabled" hidden="hidden" value=""> Seleccione la frecuencia </option>
                        <option value="diaria">Diaria</option>
                        <option value="semanal">Semanal</option>
                        <option value="mensual">Mensual</option>
                        </select></span></div>
                      </div>
                    <div class="field is-expanded is-floating-label">
                      <label class="label">Comentarios agua potable</label>
                      <div class="control is-small is-clearfix"><input type="text" autocomplete="on" maxlength="100"
                          rows="1" class="input is-small"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="field">
                <div class="field-body">
                  <div class="field is-grouped">
                    <div class="field"><label class="b-checkbox checkbox is-small"><input type="checkbox"
                          autocomplete="on" true-value="true" value="false"><span class="check"></span><span
                          class="control-label">Cercanía aguas residuales</span></label></div>
                    <div class="field is-expanded is-floating-label"><label class="label">Comentarios Aguas
                        Residuales</label>
                      <div class="control is-small is-clearfix"><input type="text" autocomplete="on" maxlength="100"
                          class="input is-small"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="field">
                <div class="field-body">
                  <div class="field is-grouped">
                    <div class="field"><label class="b-checkbox checkbox is-small"><input type="checkbox"
                          autocomplete="on" true-value="true" value="false"><span class="check"></span><span
                          class="control-label">Cercanía basurero</span></label></div>
                    <div class="field is-expanded is-floating-label"><label class="label">Comentarios cercanía
                        basurero</label>
                      <div class="control is-small is-clearfix"><input type="text" autocomplete="on" maxlength="100"
                          class="input is-small"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="field">
                <div class="field-body">
                  <div class="field is-grouped">
                    <div class="field"><label class="b-checkbox checkbox is-small"><input type="checkbox"
                          autocomplete="on" true-value="true" value="false"><span class="check"></span><span
                          class="control-label">Acceso vía de tierra</span></label></div>
                    <div class="field is-expanded is-floating-label"><label class="label">Comentarios Acceso vía de
                        tierra</label>
                      <div class="control is-small is-clearfix"><input type="text" autocomplete="on" maxlength="100"
                          class="input is-small"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="field">
                <div class="field-body">
                  <div class="field is-grouped">
                    <div class="field"><b class="is-size-7">Generalidades de salubridad</b></div>
                    <div class="field">
                      <div class="field-body">
                        <div class="field has-addons" v-for="(val, key) in list" v-bind:key="key">
                          <label class="b-radio radio is-small" :for="val">
                            <input type="radio" :value="val" v-model="selected2" >
                            <span class="check"></span><span class="control-label"></span>
                            {{ val }}
                          </label>
                        </div>
                          <button @click="uncheckAll" type="button" class="button is-small is-danger is-light">
                            <span class="icon is-small"><i class="mdi mdi-close-circle-outline"></i></span>
                          </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="field">
                <div class="field-body">
                  <div class="field is-grouped">
                    <div class="field is-floating-label"><label class="label">Comentarios Generales de
                        Residencia</label>
                      <div class="control is-small is-clearfix"><textarea maxlength="100" cols="50" rows="1"
                          class="textarea is-small"></textarea></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Tab>
          <Tab :is-selected="selected === 'Datos de pareja'">
            <div>
              <div class="field">
                <div class="field-body">
                  <div class="field is-grouped">
                    <div class="field">
                      <label class="b-checkbox checkbox is-small">
                        <input type="checkbox" autocomplete="on" v-model="toggle5" value="false">
                        <span class="check"></span><span class="control-label">Pareja actual</span>
                      </label>
                    </div>
                    <div class="field is-floating-label" v-show="toggle5">
                      <label class="label">Tiempo pareja</label>
                      <div class="control is-small is-clearfix">
                        <input type="text" autocomplete="on" class="input is-small">
                      </div>
                    </div>
                    <div class="field is-expanded is-floating-label" v-show="toggle5">
                      <label class="label">Comentario pareja actual</label>
                      <div class="control is-small is-clearfix">
                        <input type="text" autocomplete="on" class="input is-small">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="field"  v-show="toggle5">
                    <div class="field-body">
                      <div class="field is-grouped">
                        <div class="field mx-6">&nbsp;&nbsp;</div>
                        <div class="field is-floating-label"><label class="label">Tiempo pareja anterior</label>
                          <div class="control is-small is-clearfix"><input type="text" autocomplete="on" class="input is-small">
                          </div>
                        </div>
                        <div class="field is-expanded is-floating-label"><label class="label">Comentarios pareja anterior</label>
                          <div class="control is-small is-clearfix"><input type="text" autocomplete="on" class="input is-small">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
              <div class="field" v-show="toggle5 == false">
                <div class="field-body">
                  <div class="field is-grouped">
                    <div class="field mx-6">&nbsp;&nbsp;</div>
                    <div class="field is-floating-label"><label class="label">Última pareja</label>
                      <div class="control is-small is-clearfix"><input type="text" autocomplete="on"
                          class="input is-small"></div>
                    </div>
                    <div class="field is-expanded is-floating-label"><label class="label">Comentarios pareja
                        anterior</label>
                      <div class="control is-small is-clearfix"><input type="text" autocomplete="on"
                          class="input is-small"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Tab>
          <Tab :is-selected="selected === 'Datos de ocupación'">
            <div>
              <div class="field">
                <div class="field-body">
                  <div class="field is-grouped">
                    <div class="field">
                      <label class="b-checkbox checkbox is-small">
                        <input type="checkbox" autocomplete="on" v-model="toggle3" value="false">
                        <span class="check"></span>
                        <span class="control-label">Ocupación actual</span>
                      </label>
                    </div>
                    <div class="field is-floating-label" v-show="toggle3">
                      <label class="label">Nombre de ocupación</label>
                      <div class="control is-small is-clearfix">
                        <input type="text" autocomplete="on" class="input is-small"></div>
                    </div>
                    <div class="field is-floating-label" v-show="toggle3">
                      <label class="label">Tiempo en la ocupación</label>
                      <div class="control is-small is-clearfix">
                         <input type="text" autocomplete="on" class="input is-small"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="field">
                <div class="field-body">
                    <div class="field is-grouped" v-if="toggle3">
                        <div class="field is-floating-label"><label class="label">Ocupación anterior</label>
                            <div class="control is-small is-clearfix"><input type="text" autocomplete="on" class="input is-small">
                            </div>
                        </div>
                        <div class="field is-expanded is-floating-label"><label class="label">Comentario ocupación anterior</label>
                            <div class="control is-small is-clearfix"><input type="text" autocomplete="on" class="input is-small">
                            </div>
                        </div>
                    </div>
                    <div class="field is-grouped" v-if="toggle3 === false">
                    <div class="field is-floating-label">
                      <label class="label">Última ocupación</label>
                      <div class="control is-small is-clearfix">
                        <input type="text" autocomplete="on" class="input is-small">
                      </div>
                    </div>
                    <div class="field is-expanded is-floating-label">
                      <label class="label">Comentario última ocupación</label>
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
                      <label class="b-checkbox checkbox is-small">
                        <input type="checkbox" autocomplete="on" v-model="toggle4" value="false">
                        <span class="check"></span><span class="control-label"> Servicio agua potable </span>
                      </label>
                    </div>
                    <div class="field is-floating-label" v-if="toggle4">
                      <label class="label">Frecuencia agua potable</label>
                        <div class="control">
                          <span class="select is-small is-empty">
                            <select>
                                    <option disabled="disabled" hidden="hidden" value=""> Seleccione la frecuencia </option>
                                    <option value="diaria">Diaria</option>
                                    <option value="semanal">Semanal</option>
                                    <option value="mensual">Mensual</option>
                                </select>
                              </span>
                        </div>
                    </div>
                    <div class="field is-expanded is-floating-label">
                      <label class="label">Comentarios agua potable</label>
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
                    <div class="field"><label class="b-checkbox checkbox is-small"><input type="checkbox"
                          autocomplete="on" true-value="1" false-value="0" value="false"><span
                          class="check"></span><span class="control-label">Cercanía a aguas residuales</span></label>
                    </div>
                    <div class="field"><label class="b-checkbox checkbox is-small"><input type="checkbox"
                          autocomplete="on" true-value="1" false-value="0" value="false"><span
                          class="check"></span><span class="control-label">Cercanía a Basureros</span></label></div>
                    <div class="field"><label class="b-checkbox checkbox is-small"><input type="checkbox"
                          autocomplete="on" true-value="1" false-value="0" value="false"><span
                          class="check"></span><span class="control-label">Cercanía a granjas de animales</span></label>
                    </div>
                    <div class="field"><label class="b-checkbox checkbox is-small"><input type="checkbox"
                          autocomplete="on" true-value="1" false-value="0" value="false"><span
                          class="check"></span><span class="control-label">Cercanía a cultivos</span></label></div>
                    <div class="field"><label class="b-checkbox checkbox is-small"><input type="checkbox"
                          autocomplete="on" true-value="1" false-value="0" value="false"><span
                          class="check"></span><span class="control-label">Vías de tierra</span></label></div>
                  </div>
                </div>
              </div>
              <div class="field">
                <div class="field-body">
                  <div class="field is-grouped">
                    <div class="field"><b class="is-size-7">Generalidades de salubridad en trabajo</b></div>
                    <div class="field is-horizontal">
                      <div class="field-label is-normal"></div>
                      <div class="field-body">
                        <div class="field" v-for="(val, key) in list2" v-bind:key="key">
                          <label class="b-radio radio is-small" :for="val">
                            <input type="radio" :value="val" v-model="selected3" :id="val">
                            <span class="check">
                            </span><span class="control-label">Buena salubridad</span>
                          </label>
                        </div>
                        <div class="field"><button type="button" class="button is-small is-danger is-light" @click="uncheckAll1"><span
                              class="icon is-small"><i class="mdi mdi-close-circle-outline"></i></span></button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="field">
                <div class="field-body">
                  <div class="field is-grouped">
                    <div class="field is-floating-label"><label class="label">Comentarios Generales de ocupación y
                        trabajo</label>
                      <div class="control is-small is-clearfix"><textarea maxlength="100" cols="50" rows="1"
                          class="textarea is-small"></textarea></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Tab>
          <Tab :is-selected="selected === 'Antecedentes patológicos'">
            <div >
              <div  class="field">
                <div class="field-body">
                  <div class="field is-grouped">
                    <div  class="field">
                      <div class="field-body">
                        <div class="field has-addons" >
                          <span class="is-size-7 label"><b>Asma</b></span>
                          <label class="b-radio radio is-small" v-for="(ap, key) in radios_ap" v-bind:key="key">
                            <input type="radio" name="asma" :value="ap.val" v-model="selected4" >
                            <span class="check"></span>
                            <span class="control-label">{{ ap.label }}</span>
                          </label>
                          <button  @click="uncheckAll2" type="button" class="button is-small is-danger is-light">
                            <span class="icon is-small"><i class="mdi mdi-close-circle-outline"></i></span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div  class="field is-expanded is-floating-label">
                      <label class="label">Comentarios Asma</label>
                      <div  class="control is-small is-clearfix">
                        <input type="text" autocomplete="on" class="input is-small" name="comment_asma">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div  class="field">
                <div class="field-body">
                  <div class="field is-grouped">
                    <div  class="field">
                      <div class="field-body">
                        <div class="field has-addons" >
                          <span class="is-size-7 label"><b>Cáncer</b></span>
                          <label class="b-radio radio is-small" v-for="(ap, key) in radios_ap" v-bind:key="key">
                            <input type="radio" name="cancer" :value="ap.val" v-model="selected5" >
                            <span class="check"></span>
                            <span class="control-label">{{ ap.label }}</span>
                          </label>
                          <button  @click="uncheckAll3" type="button" class="button is-small is-danger is-light">
                            <span class="icon is-small"><i class="mdi mdi-close-circle-outline"></i></span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div  class="field is-expanded is-floating-label">
                      <label class="label">Comentarios Cáncer</label>
                      <div  class="control is-small is-clearfix">
                        <input type="text" autocomplete="on" class="input is-small" name="comment_cancer">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div  class="field">
                <div class="field-body">
                  <div class="field is-grouped">
                    <div  class="field">
                      <div class="field-body">
                        <div class="field has-addons" >
                          <span class="is-size-7 label"><b>Cardiopatía</b></span>
                          <label class="b-radio radio is-small" v-for="(ap, key) in radios_ap" v-bind:key="key">
                            <input type="radio" name="cardiopatia" :value="ap.val" v-model="selected6" >
                            <span class="check"></span>
                            <span class="control-label">{{ ap.label }}</span>
                          </label>
                          <button  @click="uncheckAll4" type="button" class="button is-small is-danger is-light">
                            <span class="icon is-small"><i class="mdi mdi-close-circle-outline"></i></span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div  class="field is-expanded is-floating-label">
                      <label class="label">Comentarios Cardiopatía</label>
                      <div  class="control is-small is-clearfix">
                        <input type="text" autocomplete="on" class="input is-small" name="comment_asma">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div  class="field">
                <div class="field-body">
                  <div class="field is-grouped">
                    <div  class="field">
                      <div class="field-body">
                        <div class="field has-addons" >
                          <span class="is-size-7 label"><b>Diábetes</b></span>
                          <label class="b-radio radio is-small" v-for="(ap, key) in radios_ap" v-bind:key="key">
                            <input type="radio" name="diabetes" :value="ap.val" v-model="selected7" >
                            <span class="check"></span>
                            <span class="control-label">{{ ap.label }}</span>
                          </label>
                          <button  @click="uncheckAll5" type="button" class="button is-small is-danger is-light">
                            <span class="icon is-small"><i class="mdi mdi-close-circle-outline"></i></span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div  class="field is-expanded is-floating-label">
                      <label class="label">Comentarios Diábetes</label>
                      <div  class="control is-small is-clearfix">
                        <input type="text" autocomplete="on" class="input is-small" name="comment_asma">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div  class="field">
                <div class="field-body">
                  <div class="field is-grouped">
                    <div  class="field">
                      <div class="field-body">
                        <div class="field has-addons" >
                          <span class="is-size-7 label"><b>Hipertensión</b></span>
                          <label class="b-radio radio is-small" v-for="(ap, key) in radios_ap" v-bind:key="key">
                            <input type="radio" name="hipertension" :value="ap.val" v-model="selected8" >
                            <span class="check"></span>
                            <span class="control-label">{{ ap.label }}</span>
                          </label>
                          <button  @click="uncheckAll6" type="button" class="button is-small is-danger is-light">
                            <span class="icon is-small"><i class="mdi mdi-close-circle-outline"></i></span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div  class="field is-expanded is-floating-label">
                      <label class="label">Comentarios Hipertensión</label>
                      <div  class="control is-small is-clearfix">
                        <input type="text" autocomplete="on" class="input is-small" name="comment_asma">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div  class="field">
                <div class="field-body">
                  <div class="field is-grouped">
                    <div  class="field">
                      <div class="field-body">
                        <div class="field has-addons" >
                          <span class="is-size-7 label"><b>TBC</b></span>
                          <label class="b-radio radio is-small" v-for="(ap, key) in radios_ap" v-bind:key="key">
                            <input type="radio" name="TBC" :value="ap.val" v-model="selected9" >
                            <span class="check"></span>
                            <span class="control-label">{{ ap.label }}</span>
                          </label>
                          <button  @click="uncheckAll7" type="button" class="button is-small is-danger is-light">
                            <span class="icon is-small"><i class="mdi mdi-close-circle-outline"></i></span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div  class="field is-expanded is-floating-label">
                      <label class="label">Comentarios TBC</label>
                      <div  class="control is-small is-clearfix">
                        <input type="text" autocomplete="on" class="input is-small" name="comment_asma">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div  class="field">
                <div class="field-body">
                  <div class="field is-grouped">
                    <div  class="field">
                      <div class="field-body">
                        <div class="field has-addons" >
                          <span class="is-size-7 label"><b>Epilepsia</b></span>
                          <label class="b-radio radio is-small" v-for="(ap, key) in radios_ap" v-bind:key="key">
                            <input type="radio" name="Epilepsia" :value="ap.val" v-model="selected10" >
                            <span class="check"></span>
                            <span class="control-label">{{ ap.label }}</span>
                          </label>
                          <button  @click="uncheckAll8" type="button" class="button is-small is-danger is-light">
                            <span class="icon is-small"><i class="mdi mdi-close-circle-outline"></i></span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div  class="field is-expanded is-floating-label">
                      <label class="label">Comentarios Epilepsia</label>
                      <div  class="control is-small is-clearfix">
                        <input type="text" autocomplete="on" class="input is-small" name="comment_asma">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div  class="field">
                <div class="field-body">
                  <div class="field is-grouped">
                    <div  class="field">
                      <div class="field-body">
                        <div class="field has-addons" >
                          <span class="is-size-7 label"><b>Enf Renales</b></span>
                          <label class="b-radio radio is-small" v-for="(ap, key) in radios_ap" v-bind:key="key">
                            <input type="radio" name="enf_Renales" :value="ap.val" v-model="selected11" >
                            <span class="check"></span>
                            <span class="control-label">{{ ap.label }}</span>
                          </label>
                          <button  @click="uncheckAll9" type="button" class="button is-small is-danger is-light">
                            <span class="icon is-small"><i class="mdi mdi-close-circle-outline"></i></span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div  class="field is-expanded is-floating-label">
                      <label class="label">Comentarios Enf Renales</label>
                      <div  class="control is-small is-clearfix">
                        <input type="text" autocomplete="on" class="input is-small" name="comment_asma">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div  class="field">
                <div class="field-body">
                  <div class="field is-grouped">
                    <div  class="field">
                      <div class="field-body">
                        <div class="field has-addons" >
                          <span class="is-size-7 label"><b>Várices</b></span>
                          <label class="b-radio radio is-small" v-for="(ap, key) in radios_ap" v-bind:key="key">
                            <input type="radio" name="varices" :value="ap.val" v-model="selected12" >
                            <span class="check"></span>
                            <span class="control-label">{{ ap.label }}</span>
                          </label>
                          <button  @click="uncheckAll10" type="button" class="button is-small is-danger is-light">
                            <span class="icon is-small"><i class="mdi mdi-close-circle-outline"></i></span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div  class="field is-expanded is-floating-label">
                      <label class="label">Comentarios Várices</label>
                      <div  class="control is-small is-clearfix">
                        <input type="text" autocomplete="on" class="input is-small" name="comment_asma">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div  class="field">
                <div class="field-body">
                  <div class="field is-grouped">
                    <div  class="field">
                      <div class="field-body">
                        <div class="field has-addons" >
                          <span class="is-size-7 label"><b>Flebitis</b></span>
                          <label class="b-radio radio is-small" v-for="(ap, key) in radios_ap" v-bind:key="key">
                            <input type="radio" name="flebitis" :value="ap.val" v-model="selected13" >
                            <span class="check"></span>
                            <span class="control-label">{{ ap.label }}</span>
                          </label>
                          <button  @click="uncheckAll11" type="button" class="button is-small is-danger is-light">
                            <span class="icon is-small"><i class="mdi mdi-close-circle-outline"></i></span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div  class="field is-expanded is-floating-label">
                      <label class="label">Comentarios Flebitis</label>
                      <div  class="control is-small is-clearfix">
                        <input type="text" autocomplete="on" class="input is-small" name="comment_asma">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div  class="field">
                <div class="field-body">
                  <div class="field is-grouped">
                    <div  class="field">
                      <div class="field-body">
                        <div class="field has-addons" >
                          <span class="is-size-7 label"><b>Tiroides</b></span>
                          <label class="b-radio radio is-small" v-for="(ap, key) in radios_ap" v-bind:key="key">
                            <input type="radio" name="tiroides" :value="ap.val" v-model="selected14" >
                            <span class="check"></span>
                            <span class="control-label">{{ ap.label }}</span>
                          </label>
                          <button  @click="uncheckAll12" type="button" class="button is-small is-danger is-light">
                            <span class="icon is-small"><i class="mdi mdi-close-circle-outline"></i></span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div  class="field is-expanded is-floating-label">
                      <label class="label">Comentarios Tiroides</label>
                      <div  class="control is-small is-clearfix">
                        <input type="text" autocomplete="on" class="input is-small" name="comment_asma">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div  class="field">
                <div class="field-body">
                  <div class="field is-grouped">
                    <label  class="switch is-small is-rounded">
                      <input type="checkbox" value="false" v-model="toggle5">
                      <span class="check"></span><span class="control-label">Alergias</span>
                    </label>
                    <div v-show="toggle5">
                      <span class="icon has-text-info" @click="addInput" ><i class="mdi mdi-plus-circle mdi-24px"></i></span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="field" v-for="(field, i) in inputs" :key="field" v-show="toggle5">
                  <div class="field ml-6">
                      <div class="field-body">
                          <div class="field is-grouped">
                              <div class="field is-floating-label"><label class="label">Alergia</label>
                                  <div class="control is-small is-clearfix"><input type="text" autocomplete="on"
                                          class="input is-small" v-model="field.result"></div>
                              </div>
                              <div  class="field is-expanded is-floating-label"><label class="label">Comentario
                                      alergia</label>
                                  <div  class="control is-small is-clearfix"><input type="text" autocomplete="on"
                                          class="input is-small" v-model="field.result"></div>
                              </div><button  type="button" class="button is-small is-danger is-light" @click="remove(i)" ><span
                                      class="icon is-small"><i class="mdi mdi-close-circle-outline"></i></span></button>
                          </div>
                      </div>
                  </div>
              </div>
              <div  class="field">
                <div class="field-body">
                  <div class="field is-grouped">
                    <div  class="field is-floating-label">
                      <label class="label">Otros</label>
                      <div  class="control is-small is-clearfix"><input type="text" autocomplete="on"
                          class="input is-small"></div>
                    </div>
                    <div  class="field is-expanded is-floating-label">
                      <label class="label">Comentarios Otros</label>
                      <div  class="control is-small is-clearfix"><input type="text" autocomplete="on"
                          class="input is-small"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div  class="field">
                <div class="field-body">
                  <div class="field is-grouped">
                    <div  class="field is-floating-label">
                      <label class="label">Comentarios Generales de antecedentes y alergias</label>
                      <div  class="control is-small is-clearfix"><textarea maxlength="100" cols="50"
                          rows="1" class="textarea is-small"></textarea></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Tab>
          <Tab :is-selected="selected === 'Actividades física'">
            <div>
              <div class="field">
                <div class="field-body">
                  <div class="field is-grouped">
                    <label  class="switch is-small is-rounded">
                      <input type="checkbox" true-value="true" value="false" v-model="af">
                      <span class="check"></span>
                      <span class="control-label">Practica</span>
                    </label>
                    <div v-show="af">
                      <span class="icon has-text-info"><i class="mdi mdi-plus-circle mdi-24px"></i></span>
                    </div>
                  </div>
                </div>
              </div>
              <div  class="field" v-show="af">
                  <div  class="field ml-6">
                      <div class="field-body">
                          <div class="field is-grouped">
                              <div  class="field is-floating-label">
                                <label class="label">Actividad</label>
                                <div class="control is-small is-clearfix">
                                  <input type="text" autocomplete="on" class="input is-small">
                                </div>
                              </div>
                              <div  class="field is-floating-label">
                                <label class="label">Veces</label>
                                <div  class="control is-short is-small is-clearfix">
                                  <input type="number" autocomplete="on" class="input is-small"></div>
                              </div>
                              <div  class="field is-floating-label">
                                <label class="label">Frecuencia</label>
                                <div  class="control">
                                  <span class="select is-small">
                                  <select>
                                    <option value="diaria">Diaria</option>
                                    <option value="semanal">Semanal</option>
                                    <option value="mensual">Mensual</option>
                                  </select>
                                </span>
                              </div>
                              </div>
                              <button  type="button" class="button is-small is-danger is-light">
                                <span class="icon is-small"><i class="mdi mdi-close-circle-outline"></i></span>
                              </button>
                          </div>
                      </div>
                  </div>
              </div>
              <div  class="field">
                <div class="field-body">
                  <div class="field is-grouped">
                    <div  class="field is-floating-label">
                      <label class="label">Comentario</label>
                      <div class="control is-small is-clearfix">
                        <textarea cols="40" class="textarea is-small"></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Tab>
          <Tab :is-selected="selected === 'Hábitos de consumo'">
            <div>
              <div class="field">
                <div class="field-body">
                  <div class="field is-grouped">
                    <div  class="field">
                      <label class="switch is-small is-rounded">
                        <input type="checkbox" value="false" v-model="hc">
                        <span class="check"></span>
                        <span class="control-label">Cigarrillos</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="field" v-show="hc">
                <div class="field-body">
                  <div class="field is-grouped">
                    <div  class="field is-floating-label">
                      <label class="label">Cantidad</label>
                      <div class="control is-short is-small is-clearfix">
                        <input type="number" autocomplete="on" class="input is-small">
                      </div>
                    </div>
                    <div class="field">
                      <div class="field-body">
                        <div class="field has-addons">
                          <label  class="b-radio radio is-small">
                            <input type="radio" name="cant" value="cigarrillos">
                            <span class="check"></span>
                            <span class="control-label">Cigarrillos</span>
                          </label><label class="b-radio radio is-small">
                            <input type="radio" name="cant" value="cajas">
                            <span class="check"></span>
                            <span class="control-label">Cajas</span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div class="field is-floating-label">
                      <label class="label">Frecuencia</label>
                      <div  class="control">
                        <span class="select is-small is-empty">
                          <select>
                            <option disabled="disabled" hidden="hidden" value=""> Seleccione </option>
                            <option  value="diaria">Diaria</option>
                            <option  value="semanal">Semanal</option>
                            <option  value="mensual">Mensual</option>
                          </select>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="field">
                <div class="field-body">
                  <div class="field is-grouped">
                    <div  class="field">
                      <label class="switch is-small is-rounded">
                        <input type="checkbox" value="false" v-model="hc1">
                        <span class="check"></span>
                        <span class="control-label">Alcohol</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="field" v-show="hc1">
                <div class="field-body">
                  <div class="field is-grouped">
                    <div class="field is-floating-label">
                      <label class="label">Cantidad</label>
                      <div  class="control is-short is-small is-clearfix">
                        <input type="number" autocomplete="on" class="input is-small">
                      </div>
                    </div>
                    <div class="field">
                      <div class="field-body">
                        <div class="field has-addons">
                          <label class="b-radio radio is-small">
                            <input type="radio" name="alcohol_cantidad" value="tragos">
                            <span class="check"></span>
                            <span class="control-label">Tragos</span>
                          </label>
                          <label class="b-radio radio is-small">
                            <input type="radio" name="alcohol_cantidad" value="botellas">
                            <span class="check"></span>
                            <span class="control-label">Botellas</span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div  class="field is-floating-label">
                      <label class="label">Frecuencia</label>
                      <div  class="control">
                        <span class="select is-small is-empty">
                          <select>
                            <option disabled="disabled" hidden="hidden" value=""> Seleccione </option>
                            <option  value="diaria">Diaria</option>
                            <option  value="semanal">Semanal</option>
                            <option  value="mensual">Mensual</option>
                          </select>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="field">
                <div class="field-body">
                  <div class="field is-grouped">
                    <label  class="switch is-small is-rounded">
                      <input type="checkbox" value="false" v-model="hc2">
                      <span class="check"></span>
                      <span class="control-label">Medicamentos</span>
                    </label>
                    <div v-show="hc2">
                      <span class="icon has-text-info">
                        <i class="mdi mdi-plus-circle mdi-24px"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div  class="field" v-show="hc2">
                <div  class="field ml-4">
                    <div class="field-body">
                      <div class="field is-grouped">
                          <div  class="field is-floating-label">
                            <label class="label">Nombre Medicamento</label>
                            <div  class="control is-small is-clearfix"><input type="text" autocomplete="on" class="input is-small"></div>
                          </div>
                          <div  class="field is-floating-label">
                            <label class="label">Cantidad</label>
                            <div  class="control is-short is-small is-clearfix"><input type="text" autocomplete="on" class="input is-small"></div>
                          </div>
                          <div  class="field is-floating-label">
                            <label class="label">Dosis</label>
                            <div  class="control is-short is-small is-clearfix"><input type="text" autocomplete="on" class="input is-small"></div>
                          </div>
                          <div  class="field is-floating-label">
                            <label class="label">Frecuencia</label>
                            <div  class="control is-short">
                                <span class="select is-small">
                                  <select>
                                      <option  value="diaria">Diaria</option>
                                      <option  value="semanal">Semanal</option>
                                      <option  value="mensual">Mensual</option>
                                  </select>
                                </span>
                            </div>
                          </div>
                          <div  class="field is-expanded is-floating-label">
                            <label class="label">Comentario</label>
                            <div  class="control is-small is-clearfix"><input type="text" autocomplete="on" class="input is-small"></div>
                          </div>
                          <button  type="button" class="button is-small is-danger is-light"><span class="icon is-small"><i class="mdi mdi-close-circle-outline"></i></span></button>
                      </div>
                    </div>
                </div>
              </div>
              <div  class="field">
                <div class="field-body">
                  <div class="field is-grouped">
                    <label  class="switch is-small is-rounded">
                      <input type="checkbox" value="false" v-model="hc3">
                      <span class="check"></span>
                      <span class="control-label">Otros</span>
                    </label>
                    <div v-show="hc3">
                      <span class="icon has-text-info">
                        <i class="mdi mdi-plus-circle mdi-24px"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="field" v-show="hc3">
                <div class="field ml-4">
                  <div class="field-body">
                    <div class="field is-grouped">
                      <div  class="field is-floating-label">
                        <label class="label">Otro</label>
                        <div  class="control is-small is-clearfix">
                          <input type="text" autocomplete="on" class="input is-small">
                        </div>
                      </div>
                      <div  class="field is-floating-label">
                        <label class="label">Frecuencia</label>
                        <div  class="control is-short">
                          <span class="select is-small">
                            <select>
                              <option  value="diaria">Diaria</option>
                              <option  value="semanal">Semanal</option>
                              <option  value="mensual">Mensual</option>
                             </select>
                            </span>
                          </div>
                        </div>
                        <div  class="field is-expanded is-floating-label">
                          <label class="label">Comentario</label>
                          <div class="control is-small is-clearfix">
                            <input type="text" autocomplete="on" class="input is-small">
                          </div>
                         </div>
                         <button  type="button" class="button is-small is-danger is-light">
                          <span class="icon is-small"><i class="mdi mdi-close-circle-outline"></i></span>
                        </button>
                        </div>
                      </div>
                  </div>
              </div>
              <div class="field">
                <div class="field-body">
                  <div class="field is-grouped">
                    <div  class="field is-floating-label">
                      <label class="label">Comentario de hábitos de consumo</label>
                      <div  class="control is-small is-clearfix">
                        <textarea cols="40" class="textarea is-small"></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Tab>
          <Tab :is-selected="selected === 'Estética'">
            <div>
              <div class="field">
                <div class="field-body">
                  <div class="field is-grouped">
                    <div class="field">
                      <label class="switch is-small is-rounded">
                        <input type="checkbox" value="false" v-model="est">
                        <span class="check"></span>
                        <span class="control-label">Maquillaje/Cosméticos</span>
                      </label>
                    </div>
                    <div class="field" v-show="est">
                      <div class="field-body">
                        <div class="field has-addons">
                          <div class="field is-floating-label">
                            <label class="label">Tipo</label>
                            <div class="field-body">
                              <div class="field is-grouped">
                                <div class="control is-small is-clearfix">
                                  <input type="text" autocomplete="on" class="input is-small"></div>
                                </div>
                              </div>
                            </div>
                            <div class="field is-floating-label">
                              <label class="label">Frecuencia</label>
                              <div class="control">
                                <span class="select is-small is-empty">
                                  <select>
                                    <option value="diaria">Diaria</option>
                                    <option value="semanal">Semanal</option>
                                    <option value="mensual">Mensual</option>
                                 </select>
                                </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="field">
                <div class="field-body">
                  <div class="field is-grouped">
                    <div class="field">
                      <label class="switch is-small is-rounded">
                        <input type="checkbox" value="false" v-model="est1">
                        <span class="check">
                        </span><span class="control-label">Tinte para cabello</span>
                      </label>
                    </div>
                    <div class="field" v-show="est1">
                      <div class="field is-floating-label">
                        <label class="label">Frecuencia</label>
                        <div class="control"><span class="select is-small is-empty">
                          <select>
                            <option value="semanal">Semanal</option>
                              <option value="quincenal">Quincenal</option>
                              <option value="mensual">Mensual</option>
                              <option value="trimestral">Trimestral</option>
                              <option value="semestral">Semestral</option>
                              <option value="anual">Anual</option>
                            </select>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="field">
                <div class="field-body">
                  <div class="field is-grouped">
                    <div class="field is-floating-label"><label class="label">Comentarios de Estética</label>
                      <div class="control is-small is-clearfix"><textarea cols="40"
                          class="textarea is-small"></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Tab>
          <Tab :is-selected="selected === 'Carácteristicas físicas'">
            <div data-v-01893954="">
              <div data-v-01893954="" class="field">
                <div class="field-body">
                  <div class="field is-grouped">
                    <div data-v-01893954="" class="field"><span data-v-01893954="" class="is-size-7"><b
                          data-v-01893954="">Estatura</b></span></div>
                    <div data-v-01893954="" class="field is-floating-label">
                      <label class="label">m</label>
                      <div data-v-01893954="" class="control is-short is-small is-clearfix"><input type="number"
                          autocomplete="on" placeholder="1" class="input is-small"></div>
                    </div>
                    <div data-v-01893954="" class="field is-floating-label">
                      <label class="label">cm</label>
                      <div data-v-01893954="" class="control is-short is-small is-clearfix"><input type="number"
                          autocomplete="on" class="input is-small"></div>
                    </div>
                    <div data-v-01893954="" class="field is-floating-label">
                      <label class="label">Color de ojos</label>
                      <div data-v-01893954="" class="control is-small is-clearfix"><input type="text" autocomplete="on"
                          class="input is-small"></div>
                    </div>
                    <div data-v-01893954="" class="field is-floating-label">
                      <label class="label">Color de cabello</label>
                      <div data-v-01893954="" class="control is-small is-clearfix"><input type="text" autocomplete="on"
                          class="input is-small"></div>
                    </div>
                    <div data-v-01893954="" class="field is-floating-label">
                      <label class="label">Color de piel</label>
                      <div data-v-01893954="" class="control is-small is-clearfix"><input type="text" autocomplete="on"
                          class="input is-small"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div data-v-01893954="" class="field">
                <div class="field-body">
                  <div class="field is-grouped">
                    <span data-v-01893954="" class="mx-6">&nbsp;</span>
                    <figure data-v-01893954="" class="b-image-wrapper image"><img src="../assets/tipo_cabello.jpg"
                        loading="lazy" class=""></figure>
                    <span data-v-01893954="" class="mx-6">&nbsp;</span><span data-v-01893954=""
                      class="mx-5">&nbsp;</span>
                    <figure data-v-01893954="" class="b-image-wrapper image"><img src="../assets/contextura.jpg"
                        loading="lazy" class=""></figure>
                  </div>
                </div>
              </div>
              <div data-v-01893954="" class="field">
                <div class="field-body">
                  <div class="field is-grouped">
                    <div data-v-01893954="" class="field"><span data-v-01893954="" class="is-size-7"><b
                          data-v-01893954="">Tipo de Cabello</b></span></div>
                    <div data-v-01893954="" class="field">
                      <div class="field-body">
                        <div class="field has-addons"><label data-v-01893954="" class="b-radio radio is-small"><input
                              type="radio" name="tipo" value="liso"><span class="check"></span><span
                              class="control-label">Liso</span></label><label data-v-01893954=""
                            class="b-radio radio is-small"><input type="radio" name="tipo" value="ondulado"><span
                              class="check"></span><span class="control-label">Ondulado</span></label><label
                            data-v-01893954="" class="b-radio radio is-small"><input type="radio" name="tipo"
                              value="rizado"><span class="check"></span><span
                              class="control-label">Rizado</span></label><label data-v-01893954=""
                            class="b-radio radio is-small"><input type="radio" name="tipo" value="crespo"><span
                              class="check"></span><span class="control-label">Crespo</span></label><button
                            data-v-01893954="" type="button" class="button is-small is-danger is-light"><span
                              class="icon is-small"><i class="mdi mdi-close-circle-outline"></i></span></button></div>
                      </div>
                    </div>
                    <div data-v-01893954="" class="field"><span data-v-01893954="" class="is-size-7"><b
                          data-v-01893954="">Contextura física</b></span></div>
                    <div data-v-01893954="" class="field">
                      <div class="field-body">
                        <div class="field has-addons"><label data-v-01893954="" class="b-radio radio is-small"><input
                              type="radio" name="contextura" value="ectomorfo"><span class="check"></span><span
                              class="control-label">Ectomorfo</span></label><label data-v-01893954=""
                            class="b-radio radio is-small"><input type="radio" name="contextura" value="mesomorfo"><span
                              class="check"></span><span class="control-label">Mesomorfo</span></label><label
                            data-v-01893954="" class="b-radio radio is-small"><input type="radio" name="contextura"
                              value="endomorfo"><span class="check"></span><span
                              class="control-label">Endomorfo</span></label><button data-v-01893954="" type="button"
                            class="button is-small is-danger is-light"><span class="icon is-small"><i
                                class="mdi mdi-close-circle-outline"></i></span></button></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div data-v-01893954="" class="field">
                <div class="field-body">
                  <div class="field is-grouped">
                    <div data-v-01893954="" class="field"><span data-v-01893954="" class="is-size-7"><b
                          data-v-01893954="">Cantidad de Cabello</b></span></div>
                    <div data-v-01893954="" class="field">
                      <div class="field-body">
                        <div class="field has-addons"><label data-v-01893954="" class="b-radio radio is-small"><input
                              type="radio" name="cantcabello" value="abundante"><span class="check"></span><span
                              class="control-label">Abundante</span></label><label data-v-01893954=""
                            class="b-radio radio is-small"><input type="radio" name="cantcabello" value="medio"><span
                              class="check"></span><span class="control-label">Medio</span></label><label
                            data-v-01893954="" class="b-radio radio is-small"><input type="radio" name="cantcabello"
                              value="escaso"><span class="check"></span><span
                              class="control-label">Escaso</span></label><button data-v-01893954="" type="button"
                            class="button is-small is-danger is-light"><span class="icon is-small"><i
                                class="mdi mdi-close-circle-outline"></i></span></button></div>
                      </div>
                    </div>
                    <div data-v-01893954="" class="field is-floating-label">
                      <label class="label">Grupo sanguíneo</label>
                      <div data-v-01893954="" class="control">
                        <span class="select is-small is-empty">
                          <select>
                            <option data-v-01893954="">Seleccione tipo</option>
                            <option data-v-01893954="" value="A">A</option>
                            <option data-v-01893954="" value="B">B</option>
                            <option data-v-01893954="" value="AB">AB</option>
                            <option data-v-01893954="" value="O">O</option>
                          </select>
                        </span>
                      </div>
                    </div>
                    <div data-v-01893954="" class="field"><span data-v-01893954="" class="is-size-7"><b
                          data-v-01893954="">RH</b></span></div>
                    <label data-v-01893954="" class="b-radio radio is-small"><input type="radio" name="factor"
                        value="+"><span class="check"></span><span class="control-label">Positivo</span></label><label
                      data-v-01893954="" class="b-radio radio is-small"><input type="radio" name="factor"
                        value="-"><span class="check"></span><span class="control-label">Negativo</span></label>
                  </div>
                </div>
              </div>
              <div data-v-01893954="" class="field">
                <div class="field-body">
                  <div class="field is-grouped">
                    <div data-v-01893954="" class="field is-floating-label">
                      <label class="label">Comentarios de condición física</label>
                      <div data-v-01893954="" class="control is-small is-clearfix"><textarea cols="40"
                          class="textarea is-small"></textarea></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Tab>
          <Tab :is-selected="selected === 'Asp Emocional y Alimenticio'">
            <div>
              <div class="field">
                <div class="field-body">
                  <div class="field is-grouped">
                    <div class="field">
                      <span class="is-size-7"><b>Aspectos psicológicos</b></span>
                    </div>
                    <div class="field">
                      <label class="switch is-small is-rounded">
                        <input type="checkbox" value="false" v-model="apa">
                        <span class="check"></span>
                        <span class="control-label">Normal</span>
                      </label>
                    </div>
                    <div class="field is-expanded is-floating-label" v-show="apa">
                      <label class="label">Comentarios aspectos psicológicos</label>
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
                      <span class="is-size-7"><b>Aspectos alimenticios</b></span>
                    </div>
                    <div class="field">
                      <label class="switch is-small is-rounded">
                        <input type="checkbox" value="false" v-model="apa1">
                        <span class="check"></span>
                        <span class="control-label">Normal</span>
                      </label>
                    </div>
                    <div class="field is-expanded is-floating-label" v-show="apa1">
                      <label class="label">Comentarios aspectos alimenticios</label>
                      <div class="control is-small is-clearfix">
                        <input type="text" autocomplete="on" class="input is-small">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Tab>
          </section>
        </TabNav>
        <div class="field">
          <div class="field-body">
            <div class="field is-grouped is-grouped-centered"><button type="submit" disabled="disabled"
                class="button is-info"><span> Registrar </span></button></div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import HeroBar from '@/components/HeroBar.vue'
import TabNav from '@/components/TabNav.vue'
import Tab from '@/components/Tab.vue'

export default defineComponent({
  name: 'CrearPacientes',
  components: {
    HeroBar,
    TabNav,
    Tab
  },
  data () {
    return {
      selected: 'Datos de residencia',
      inputs: [],
      toggle: false,
      toggle1: false,
      toggle2: false,
      toggle3: false,
      toggle4: false,
      toggle5: false,
      af: false,
      hc: false,
      hc1: false,
      hc2: false,
      hc3: false,
      est: false,
      est1: false,
      apa: false,
      apa1: false,
      list: ['Buena salubridad', 'Salubridad media', 'Condiciones insalubres'],
      list2: ['Buena salubridad', 'Salubridad media', 'Condiciones insalubres'],
      radios_ap: [
        { label: 'Personal', val: 'personal' },
        { label: 'Familiar', val: 'familiar' },
        { label: 'Ambos', val: 'ambos' }
      ],
      selected2: '',
      selected3: '',
      selected4: '',
      selected5: '',
      selected6: '',
      selected7: '',
      selected8: '',
      selected9: '',
      selected10: '',
      selected11: '',
      selected12: '',
      selected13: '',
      selected14: ''
    }
  },
  methods: {
    setSelected (tab) {
      this.selected = tab
    },
    uncheckAll: function () {
      this.selected2 = false
    },
    uncheckAll1: function () {
      this.selected3 = false
    },
    uncheckAll2: function () {
      this.selected4 = false
    },
    uncheckAll3: function () {
      this.selected5 = false
    },
    uncheckAll4: function () {
      this.selected6 = false
    },
    uncheckAll5: function () {
      this.selected7 = false
    },
    uncheckAll6: function () {
      this.selected8 = false
    },
    uncheckAll7: function () {
      this.selected9 = false
    },
    uncheckAll8: function () {
      this.selected10 = false
    },
    uncheckAll9: function () {
      this.selected11 = false
    },
    uncheckAll10: function () {
      this.selected12 = false
    },
    uncheckAll11: function () {
      this.selected13 = false
    },
    uncheckAll12: function () {
      this.selected14 = false
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
