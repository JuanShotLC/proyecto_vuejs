<template>
  <div id="app">
    <hero-bar :has-right-visible="false">
      Consulta
    </hero-bar>
    <section class="section is-main-section">
      <TabNav
        :tabs="['Motivos Generales', 'Motivo Consulta', 'Evaluacion Fisica']"
        :selected="selected" @selected="setSelected">
        <section class="tab-content">
        <Tab :is-selected="selected === 'Motivos Generales'">
          <form>
                    <div class="card">
                        <header class="card-header">
                            <p class="card-header-title"> Motivos principales </p>
                        </header>
                        <div class="card-content">
                            <div class="mb-3">
                                <div class="field">
                                    <div class="field-body">
                                        <div class="field is-grouped">
                                            <div class="field"><label class="switch is-small is-rounded"><input
                                                        type="checkbox" true-value="1" false-value="0"
                                                        value="false"><span class="check"></span><span
                                                        class="control-label">Tos</span></label></div>
                                            <div class="field" style="display: none;">
                                                <div class="field-body">
                                                    <div class="field has-addons"><label
                                                            class="b-radio radio is-capitalized is-small"><input
                                                                type="radio" name="ocasional" value="ocasional"><span
                                                                class="check"></span><span
                                                                class="control-label">ocasional</span></label><label
                                                            class="b-radio radio is-capitalized is-small"><input
                                                                type="radio" name="permanente" value="permanente"><span
                                                                class="check"></span><span
                                                                class="control-label">permanente</span></label><label
                                                            class="b-radio radio is-capitalized is-small"><input
                                                                type="radio" name="persistente"
                                                                value="persistente"><span class="check"></span><span
                                                                class="control-label">persistente</span></label><label
                                                            class="b-radio radio is-capitalized is-small"><input
                                                                type="radio" name="crisis" value="crisis"><span
                                                                class="check"></span><span
                                                                class="control-label">crisis</span></label><label
                                                            class="b-radio radio is-capitalized is-small"><input
                                                                type="radio" name="nocturna" value="nocturna"><span
                                                                class="check"></span><span
                                                                class="control-label">nocturna</span></label><label
                                                            class="b-radio radio is-capitalized is-small"><input
                                                                type="radio" name="seca" value="seca"><span
                                                                class="check"></span><span
                                                                class="control-label">seca</span></label><label
                                                            class="b-radio radio is-capitalized is-small"><input
                                                                type="radio" name="húmeda" value="húmeda"><span
                                                                class="check"></span><span
                                                                class="control-label">húmeda</span></label><label
                                                            class="b-radio radio is-capitalized is-small"><input
                                                                type="radio" name="otro" value="otro"><span
                                                                class="check"></span><span
                                                                class="control-label">otro</span></label></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="field" style="display: none;">
                                    <div class="field-body">
                                        <div class="field is-grouped">
                                            <div class="field is-floating-label" style="display: none;"><label
                                                    class="label">Otro</label>
                                                <div class="control is-small is-clearfix"><input type="text"
                                                        autocomplete="on" class="input is-small"></div>
                                            </div>
                                            <div class="field is-expanded is-floating-label"><label
                                                    class="label">Comentario</label>
                                                <div class="control is-small is-clearfix"><input type="text"
                                                        autocomplete="on" class="input is-small"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-3">
                                <div class="field">
                                    <div class="field-body">
                                        <div class="field is-grouped">
                                            <div class="field"><label class="switch is-small is-rounded"><input
                                                        type="checkbox" true-value="1" false-value="0"
                                                        value="false"><span class="check"></span><span
                                                        class="control-label">Expectoración</span></label></div>
                                            <div class="field" style="display: none;">
                                                <div class="field-body">
                                                    <div class="field has-addons"><label
                                                            class="b-radio radio is-capitalized is-small"><input
                                                                type="radio" name="mucosa" value="mucosa"><span
                                                                class="check"></span><span
                                                                class="control-label">mucosa</span></label><label
                                                            class="b-radio radio is-capitalized is-small"><input
                                                                type="radio" name="mucosa-purulenta"
                                                                value="mucosa-purulenta"><span
                                                                class="check"></span><span
                                                                class="control-label">mucosa-purulenta</span></label><label
                                                            class="b-radio radio is-capitalized is-small"><input
                                                                type="radio" name="hemoptoica" value="hemoptoica"><span
                                                                class="check"></span><span
                                                                class="control-label">hemoptoica</span></label><label
                                                            class="b-radio radio is-capitalized is-small"><input
                                                                type="radio" name="hemoptisis" value="hemoptisis"><span
                                                                class="check"></span><span
                                                                class="control-label">hemoptisis</span></label><label
                                                            class="b-radio radio is-capitalized is-small"><input
                                                                type="radio" name="broncorrea" value="broncorrea"><span
                                                                class="check"></span><span
                                                                class="control-label">broncorrea</span></label><label
                                                            class="b-radio radio is-capitalized is-small"><input
                                                                type="radio" name="vomica" value="vomica"><span
                                                                class="check"></span><span
                                                                class="control-label">vomica</span></label><label
                                                            class="b-radio radio is-capitalized is-small"><input
                                                                type="radio" name="otro" value="otro"><span
                                                                class="check"></span><span
                                                                class="control-label">otro</span></label></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="field" style="display: none;">
                                    <div class="field-body">
                                        <div class="field is-grouped">
                                            <div class="field is-floating-label" style="display: none;"><label
                                                    class="label">Otro</label>
                                                <div class="control is-small is-clearfix"><input type="text"
                                                        autocomplete="on" class="input is-small"></div>
                                            </div>
                                            <div class="field is-expanded is-floating-label"><label
                                                    class="label">Comentario</label>
                                                <div class="control is-small is-clearfix"><input type="text"
                                                        autocomplete="on" class="input is-small"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-3">
                                <div class="field">
                                    <div class="field-body">
                                        <div class="field is-grouped">
                                            <div class="field"><label class="switch is-small is-rounded"><input
                                                        type="checkbox" true-value="1" false-value="0"
                                                        value="false"><span class="check"></span><span
                                                        class="control-label">Dolor precordial</span></label></div>
                                            <div class="field" style="display: none;">
                                                <div class="field-body">
                                                    <div class="field has-addons">
                                                        <div class="field is-floating-label"><label
                                                                class="label">Localización</label>
                                                            <div class="control is-small is-clearfix"><input type="text"
                                                                    autocomplete="on" class="input is-small"></div>
                                                        </div><label
                                                            class="b-radio radio is-capitalized is-small"><input
                                                                type="radio" name="intenso" value="intenso"><span
                                                                class="check"></span><span
                                                                class="control-label">intenso</span></label><label
                                                            class="b-radio radio is-capitalized is-small"><input
                                                                type="radio" name="variable" value="variable"><span
                                                                class="check"></span><span
                                                                class="control-label">variable</span></label><label
                                                            class="b-radio radio is-capitalized is-small"><input
                                                                type="radio" name="duradero" value="duradero"><span
                                                                class="check"></span><span
                                                                class="control-label">duradero</span></label><label
                                                            class="b-radio radio is-capitalized is-small"><input
                                                                type="radio" name="otro" value="otro"><span
                                                                class="check"></span><span
                                                                class="control-label">otro</span></label>
                                                        <div class="field is-floating-label" style="display: none;">
                                                            <label class="label">Otro</label>
                                                            <div class="control is-small is-clearfix"><input type="text"
                                                                    autocomplete="on" class="input is-small"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="field" style="display: none;">
                                    <div class="field-body">
                                        <div class="field is-grouped">
                                            <div class="field is-floating-label"><label class="label">Evolucion</label>
                                                <div class="control is-small is-clearfix"><input type="text"
                                                        autocomplete="on" class="input is-small"></div>
                                            </div>
                                            <div class="field is-expanded is-floating-label"><label
                                                    class="label">Comentario</label>
                                                <div class="control is-small is-clearfix"><input type="text"
                                                        autocomplete="on" class="input is-small"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-3">
                                <div class="field">
                                    <div class="field-body">
                                        <div class="field is-grouped">
                                            <div class="field"><label class="switch is-small is-rounded"><input
                                                        type="checkbox" true-value="1" false-value="0"
                                                        value="false"><span class="check"></span><span
                                                        class="control-label">Dolor Costal Izquierdo</span></label>
                                            </div>
                                            <div class="field" style="display: none;">
                                                <div class="field-body">
                                                    <div class="field has-addons">
                                                        <div class="field is-floating-label"><label
                                                                class="label">Localización</label>
                                                            <div class="control is-small is-clearfix"><input type="text"
                                                                    autocomplete="on" class="input is-small"></div>
                                                        </div><label
                                                            class="b-radio radio is-capitalized is-small"><input
                                                                type="radio" name="intenso" value="intenso"><span
                                                                class="check"></span><span
                                                                class="control-label">intenso</span></label><label
                                                            class="b-radio radio is-capitalized is-small"><input
                                                                type="radio" name="variable" value="variable"><span
                                                                class="check"></span><span
                                                                class="control-label">variable</span></label><label
                                                            class="b-radio radio is-capitalized is-small"><input
                                                                type="radio" name="duradero" value="duradero"><span
                                                                class="check"></span><span
                                                                class="control-label">duradero</span></label><label
                                                            class="b-radio radio is-capitalized is-small"><input
                                                                type="radio" name="otro" value="otro"><span
                                                                class="check"></span><span
                                                                class="control-label">otro</span></label>
                                                        <div class="field is-floating-label" style="display: none;">
                                                            <label class="label">Otro</label>
                                                            <div class="control is-small is-clearfix"><input type="text"
                                                                    autocomplete="on" class="input is-small"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="field" style="display: none;">
                                    <div class="field-body">
                                        <div class="field is-grouped">
                                            <div class="field is-floating-label"><label class="label">Evolucion</label>
                                                <div class="control is-small is-clearfix"><input type="text"
                                                        autocomplete="on" class="input is-small"></div>
                                            </div>
                                            <div class="field is-expanded is-floating-label"><label
                                                    class="label">Comentario</label>
                                                <div class="control is-small is-clearfix"><input type="text"
                                                        autocomplete="on" class="input is-small"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-3">
                                <div class="field">
                                    <div class="field-body">
                                        <div class="field is-grouped">
                                            <div class="field"><label class="switch is-small is-rounded"><input
                                                        type="checkbox" true-value="1" false-value="0"
                                                        value="false"><span class="check"></span><span
                                                        class="control-label">Dolor Costal Izquierdo</span></label>
                                            </div>
                                            <div class="field" style="display: none;">
                                                <div class="field-body">
                                                    <div class="field has-addons">
                                                        <div class="field is-floating-label"><label
                                                                class="label">Localización</label>
                                                            <div class="control is-small is-clearfix"><input type="text"
                                                                    autocomplete="on" class="input is-small"></div>
                                                        </div><label
                                                            class="b-radio radio is-capitalized is-small"><input
                                                                type="radio" name="intenso" value="intenso"><span
                                                                class="check"></span><span
                                                                class="control-label">intenso</span></label><label
                                                            class="b-radio radio is-capitalized is-small"><input
                                                                type="radio" name="variable" value="variable"><span
                                                                class="check"></span><span
                                                                class="control-label">variable</span></label><label
                                                            class="b-radio radio is-capitalized is-small"><input
                                                                type="radio" name="duradero" value="duradero"><span
                                                                class="check"></span><span
                                                                class="control-label">duradero</span></label><label
                                                            class="b-radio radio is-capitalized is-small"><input
                                                                type="radio" name="otro" value="otro"><span
                                                                class="check"></span><span
                                                                class="control-label">otro</span></label>
                                                        <div class="field is-floating-label" style="display: none;">
                                                            <label class="label">Otro</label>
                                                            <div class="control is-small is-clearfix"><input type="text"
                                                                    autocomplete="on" class="input is-small"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="field" style="display: none;">
                                    <div class="field-body">
                                        <div class="field is-grouped">
                                            <div class="field is-floating-label"><label class="label">Evolucion</label>
                                                <div class="control is-small is-clearfix"><input type="text"
                                                        autocomplete="on" class="input is-small"></div>
                                            </div>
                                            <div class="field is-expanded is-floating-label"><label
                                                    class="label">Comentario</label>
                                                <div class="control is-small is-clearfix"><input type="text"
                                                        autocomplete="on" class="input is-small"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-3">
                                <div class="field">
                                    <div class="field-body">
                                        <div class="field is-grouped">
                                            <div class="field"><label class="switch is-small is-rounded"><input
                                                        type="checkbox" true-value="1" false-value="0"
                                                        value="false"><span class="check"></span><span
                                                        class="control-label">Dolor Abdominal</span></label></div>
                                            <div class="field" style="display: none;">
                                                <div class="field-body">
                                                    <div class="field has-addons">
                                                        <div class="field is-floating-label"><label
                                                                class="label">Localización</label>
                                                            <div class="control is-small is-clearfix"><input type="text"
                                                                    autocomplete="on" class="input is-small"></div>
                                                        </div><label
                                                            class="b-radio radio is-capitalized is-small"><input
                                                                type="radio" name="intenso" value="intenso"><span
                                                                class="check"></span><span
                                                                class="control-label">intenso</span></label><label
                                                            class="b-radio radio is-capitalized is-small"><input
                                                                type="radio" name="variable" value="variable"><span
                                                                class="check"></span><span
                                                                class="control-label">variable</span></label><label
                                                            class="b-radio radio is-capitalized is-small"><input
                                                                type="radio" name="duradero" value="duradero"><span
                                                                class="check"></span><span
                                                                class="control-label">duradero</span></label><label
                                                            class="b-radio radio is-capitalized is-small"><input
                                                                type="radio" name="otro" value="otro"><span
                                                                class="check"></span><span
                                                                class="control-label">otro</span></label>
                                                        <div class="field is-floating-label" style="display: none;">
                                                            <label class="label">Otro</label>
                                                            <div class="control is-small is-clearfix"><input type="text"
                                                                    autocomplete="on" class="input is-small"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="field" style="display: none;">
                                    <div class="field-body">
                                        <div class="field is-grouped">
                                            <div class="field is-floating-label"><label class="label">Evolucion</label>
                                                <div class="control is-small is-clearfix"><input type="text"
                                                        autocomplete="on" class="input is-small"></div>
                                            </div>
                                            <div class="field is-expanded is-floating-label"><label
                                                    class="label">Comentario</label>
                                                <div class="control is-small is-clearfix"><input type="text"
                                                        autocomplete="on" class="input is-small"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-3">
                                <div class="field">
                                    <div class="field-body">
                                        <div class="field is-grouped">
                                            <div class="field"><label class="switch is-small is-rounded"><input
                                                        type="checkbox" true-value="1" false-value="0"
                                                        value="false"><span class="check"></span><span
                                                        class="control-label">Dolor Articular</span></label></div>
                                            <div class="field" style="display: none;">
                                                <div class="field-body">
                                                    <div class="field has-addons">
                                                        <div class="field is-floating-label"><label
                                                                class="label">Localización</label>
                                                            <div class="control is-small is-clearfix"><input type="text"
                                                                    autocomplete="on" class="input is-small"></div>
                                                        </div><label
                                                            class="b-radio radio is-capitalized is-small"><input
                                                                type="radio" name="intenso" value="intenso"><span
                                                                class="check"></span><span
                                                                class="control-label">intenso</span></label><label
                                                            class="b-radio radio is-capitalized is-small"><input
                                                                type="radio" name="variable" value="variable"><span
                                                                class="check"></span><span
                                                                class="control-label">variable</span></label><label
                                                            class="b-radio radio is-capitalized is-small"><input
                                                                type="radio" name="duradero" value="duradero"><span
                                                                class="check"></span><span
                                                                class="control-label">duradero</span></label><label
                                                            class="b-radio radio is-capitalized is-small"><input
                                                                type="radio" name="otro" value="otro"><span
                                                                class="check"></span><span
                                                                class="control-label">otro</span></label>
                                                        <div class="field is-floating-label" style="display: none;">
                                                            <label class="label">Otro</label>
                                                            <div class="control is-small is-clearfix"><input type="text"
                                                                    autocomplete="on" class="input is-small"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="field" style="display: none;">
                                    <div class="field-body">
                                        <div class="field is-grouped">
                                            <div class="field is-floating-label"><label class="label">Evolucion</label>
                                                <div class="control is-small is-clearfix"><input type="text"
                                                        autocomplete="on" class="input is-small"></div>
                                            </div>
                                            <div class="field is-expanded is-floating-label"><label
                                                    class="label">Comentario</label>
                                                <div class="control is-small is-clearfix"><input type="text"
                                                        autocomplete="on" class="input is-small"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-3">
                                <div class="field">
                                    <div class="field-body">
                                        <div class="field is-grouped">
                                            <div class="field"><label class="switch is-small is-rounded"><input
                                                        type="checkbox" true-value="1" false-value="0"
                                                        value="false"><span class="check"></span><span
                                                        class="control-label">Otras dolencias</span></label></div>
                                            <div class="field" style="display: none;">
                                                <div class="field-body">
                                                    <div class="field has-addons">
                                                        <div class="field is-floating-label"><label
                                                                class="label">Localización</label>
                                                            <div class="control is-small is-clearfix"><input type="text"
                                                                    autocomplete="on" class="input is-small"></div>
                                                        </div><label
                                                            class="b-radio radio is-capitalized is-small"><input
                                                                type="radio" name="intenso" value="intenso"><span
                                                                class="check"></span><span
                                                                class="control-label">intenso</span></label><label
                                                            class="b-radio radio is-capitalized is-small"><input
                                                                type="radio" name="variable" value="variable"><span
                                                                class="check"></span><span
                                                                class="control-label">variable</span></label><label
                                                            class="b-radio radio is-capitalized is-small"><input
                                                                type="radio" name="duradero" value="duradero"><span
                                                                class="check"></span><span
                                                                class="control-label">duradero</span></label><label
                                                            class="b-radio radio is-capitalized is-small"><input
                                                                type="radio" name="otro" value="otro"><span
                                                                class="check"></span><span
                                                                class="control-label">otro</span></label>
                                                        <div class="field is-floating-label" style="display: none;">
                                                            <label class="label">Otro</label>
                                                            <div class="control is-small is-clearfix"><input type="text"
                                                                    autocomplete="on" class="input is-small"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="field" style="display: none;">
                                    <div class="field-body">
                                        <div class="field is-grouped">
                                            <div class="field is-floating-label"><label class="label">Evolucion</label>
                                                <div class="control is-small is-clearfix"><input type="text"
                                                        autocomplete="on" class="input is-small"></div>
                                            </div>
                                            <div class="field is-expanded is-floating-label"><label
                                                    class="label">Comentario</label>
                                                <div class="control is-small is-clearfix"><input type="text"
                                                        autocomplete="on" class="input is-small"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-3">
                                <div class="field">
                                    <div class="field-body">
                                        <div class="field is-grouped">
                                            <div class="field"><label class="switch is-small is-rounded"><input
                                                        type="checkbox" true-value="1" false-value="0"
                                                        value="false"><span class="check"></span><span
                                                        class="control-label">Problemas Digestivos</span></label></div>
                                            <div class="field" style="display: none;">
                                                <div class="field-body">
                                                    <div class="field has-addons"><label
                                                            class="b-radio radio is-capitalized is-small"><input
                                                                type="radio" name="polifagia" value="polifagia"><span
                                                                class="check"></span><span
                                                                class="control-label">polifagia</span></label><label
                                                            class="b-radio radio is-capitalized is-small"><input
                                                                type="radio" name="inapetencia"
                                                                value="inapetencia"><span class="check"></span><span
                                                                class="control-label">inapetencia</span></label><label
                                                            class="b-radio radio is-capitalized is-small"><input
                                                                type="radio" name="nauseas" value="nauseas"><span
                                                                class="check"></span><span
                                                                class="control-label">nauseas</span></label><label
                                                            class="b-radio radio is-capitalized is-small"><input
                                                                type="radio" name="reflujo" value="reflujo"><span
                                                                class="check"></span><span
                                                                class="control-label">reflujo</span></label><label
                                                            class="b-radio radio is-capitalized is-small"><input
                                                                type="radio" name="diarrea" value="diarrea"><span
                                                                class="check"></span><span
                                                                class="control-label">diarrea</span></label><label
                                                            class="b-radio radio is-capitalized is-small"><input
                                                                type="radio" name="constipacion"
                                                                value="constipacion"><span class="check"></span><span
                                                                class="control-label">constipacion</span></label><label
                                                            class="b-radio radio is-capitalized is-small"><input
                                                                type="radio" name="heces_negras"
                                                                value="heces_negras"><span class="check"></span><span
                                                                class="control-label">heces_negras</span></label><label
                                                            class="b-radio radio is-capitalized is-small"><input
                                                                type="radio" name="otro" value="otro"><span
                                                                class="check"></span><span
                                                                class="control-label">otro</span></label></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="field" style="display: none;">
                                    <div class="field-body">
                                        <div class="field is-grouped">
                                            <div class="field is-floating-label" style="display: none;"><label
                                                    class="label">Otro</label>
                                                <div class="control is-small is-clearfix"><input type="text"
                                                        autocomplete="on" class="input is-small"></div>
                                            </div>
                                            <div class="field is-expanded is-floating-label"><label
                                                    class="label">Comentario</label>
                                                <div class="control is-small is-clearfix"><input type="text"
                                                        autocomplete="on" class="input is-small"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-3">
                                <div class="field">
                                    <div class="field-body">
                                        <div class="field is-grouped">
                                            <div class="field"><label class="switch is-small is-rounded"><input
                                                        type="checkbox" true-value="1" false-value="0"
                                                        value="false"><span class="check"></span><span
                                                        class="control-label">Problemas de Orina</span></label></div>
                                            <div class="field" style="display: none;">
                                                <div class="field-body">
                                                    <div class="field has-addons"><label
                                                            class="b-radio radio is-capitalized is-small"><input
                                                                type="radio" name="polifagia" value="polifagia"><span
                                                                class="check"></span><span
                                                                class="control-label">polifagia</span></label><label
                                                            class="b-radio radio is-capitalized is-small"><input
                                                                type="radio" name="inapetencia"
                                                                value="inapetencia"><span class="check"></span><span
                                                                class="control-label">inapetencia</span></label><label
                                                            class="b-radio radio is-capitalized is-small"><input
                                                                type="radio" name="nauseas" value="nauseas"><span
                                                                class="check"></span><span
                                                                class="control-label">nauseas</span></label><label
                                                            class="b-radio radio is-capitalized is-small"><input
                                                                type="radio" name="reflujo" value="reflujo"><span
                                                                class="check"></span><span
                                                                class="control-label">reflujo</span></label><label
                                                            class="b-radio radio is-capitalized is-small"><input
                                                                type="radio" name="diarrea" value="diarrea"><span
                                                                class="check"></span><span
                                                                class="control-label">diarrea</span></label><label
                                                            class="b-radio radio is-capitalized is-small"><input
                                                                type="radio" name="constipacion"
                                                                value="constipacion"><span class="check"></span><span
                                                                class="control-label">constipacion</span></label><label
                                                            class="b-radio radio is-capitalized is-small"><input
                                                                type="radio" name="heces_negras"
                                                                value="heces_negras"><span class="check"></span><span
                                                                class="control-label">heces_negras</span></label><label
                                                            class="b-radio radio is-capitalized is-small"><input
                                                                type="radio" name="otro" value="otro"><span
                                                                class="check"></span><span
                                                                class="control-label">otro</span></label></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="field" style="display: none;">
                                    <div class="field-body">
                                        <div class="field is-grouped">
                                            <div class="field is-floating-label" style="display: none;"><label
                                                    class="label">Otro</label>
                                                <div class="control is-small is-clearfix"><input type="text"
                                                        autocomplete="on" class="input is-small"></div>
                                            </div>
                                            <div class="field is-expanded is-floating-label"><label
                                                    class="label">Comentario</label>
                                                <div class="control is-small is-clearfix"><input type="text"
                                                        autocomplete="on" class="input is-small"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="field">
                                <div class="field-body">
                                    <div class="field is-grouped is-grouped-multiline">
                                        <div class="control"><label class="switch is-small is-rounded"><input
                                                    type="checkbox" true-value="1" false-value="0" value="false"><span
                                                    class="check"></span><span
                                                    class="control-label">Cefalea</span></label></div>
                                        <div class="control"><label class="switch is-small is-rounded"><input
                                                    type="checkbox" true-value="1" false-value="0" value="false"><span
                                                    class="check"></span><span
                                                    class="control-label">Vértigo</span></label></div>
                                        <div class="control"><label class="switch is-small is-rounded"><input
                                                    type="checkbox" true-value="1" false-value="0" value="false"><span
                                                    class="check"></span><span
                                                    class="control-label">Acúfenos</span></label></div>
                                        <div class="control"><label class="switch is-small is-rounded"><input
                                                    type="checkbox" true-value="1" false-value="0" value="false"><span
                                                    class="check"></span><span
                                                    class="control-label">Fotofobias</span></label></div>
                                        <div class="control"><label class="switch is-small is-rounded"><input
                                                    type="checkbox" true-value="1" false-value="0" value="false"><span
                                                    class="check"></span><span
                                                    class="control-label">Diplopia</span></label></div>
                                        <div class="control"><label class="switch is-small is-rounded"><input
                                                    type="checkbox" true-value="1" false-value="0" value="false"><span
                                                    class="check"></span><span
                                                    class="control-label">Parestesias</span></label></div>
                                        <div class="control"><label class="switch is-small is-rounded"><input
                                                    type="checkbox" true-value="1" false-value="0" value="false"><span
                                                    class="check"></span><span
                                                    class="control-label">Fiebre</span></label></div>
                                        <div class="control"><label class="switch is-small is-rounded"><input
                                                    type="checkbox" true-value="1" false-value="0" value="false"><span
                                                    class="check"></span><span class="control-label">Pérdida de
                                                    peso</span></label></div>
                                        <div class="control"><label class="switch is-small is-rounded"><input
                                                    type="checkbox" true-value="1" false-value="0" value="false"><span
                                                    class="check"></span><span
                                                    class="control-label">Astenia</span></label></div>
                                        <div class="control"><label class="switch is-small is-rounded"><input
                                                    type="checkbox" true-value="1" false-value="0" value="false"><span
                                                    class="check"></span><span
                                                    class="control-label">Alergia</span></label></div>
                                        <div class="control"><label class="switch is-small is-rounded"><input
                                                    type="checkbox" true-value="1" false-value="0" value="false"><span
                                                    class="check"></span><span
                                                    class="control-label">Erupciones</span></label></div>
                                    </div>
                                </div>
                            </div>
                            <div class="field">
                                <div class="field-body">
                                    <div class="field is-grouped">
                                        <div class="field is-expanded is-floating-label"><label class="label">Otros
                                                motivos</label>
                                            <div class="control is-clearfix"><input type="text" autocomplete="on"
                                                    class="input"></div>
                                        </div>
                                        <div class="field is-expanded is-floating-label"><label
                                                class="label">Comentarios generales</label>
                                            <div class="control is-clearfix"><input type="text" autocomplete="on"
                                                    class="input"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="field"><label class="switch is-small is-rounded"><input type="checkbox"
                                        true-value="true" value="false"><span class="check"></span><span
                                        class="control-label">Paciente referido</span></label></div>
                            <div class="field">
                                <p class="control has-text-centered"><button type="submit"
                                        class="button is-primary"><span>Guardar Motivo</span></button></p>
                            </div>
                        </div>
                    </div>
          </form>
        </Tab>
        <Tab :is-selected="selected === 'Motivo Consulta'">
          <form>
                    <div class="card">
                        <header class="card-header">
                            <p class="card-header-title"> Motivos principales </p>
                        </header>
                        <div class="card-content">
                            <div class="mb-3">
                                <div class="field">
                                    <div class="field-body">
                                        <div class="field is-grouped">
                                            <div class="field"><label class="switch is-small is-rounded"><input
                                                        type="checkbox" true-value="1" false-value="0"
                                                        value="false"><span class="check"></span><span
                                                        class="control-label">Tos</span></label></div>
                                            <div class="field" style="display: none;">
                                                <div class="field-body">
                                                    <div class="field has-addons"><label
                                                            class="b-radio radio is-capitalized is-small"><input
                                                                type="radio" name="ocasional" value="ocasional"><span
                                                                class="check"></span><span
                                                                class="control-label">ocasional</span></label><label
                                                            class="b-radio radio is-capitalized is-small"><input
                                                                type="radio" name="permanente" value="permanente"><span
                                                                class="check"></span><span
                                                                class="control-label">permanente</span></label><label
                                                            class="b-radio radio is-capitalized is-small"><input
                                                                type="radio" name="persistente"
                                                                value="persistente"><span class="check"></span><span
                                                                class="control-label">persistente</span></label><label
                                                            class="b-radio radio is-capitalized is-small"><input
                                                                type="radio" name="crisis" value="crisis"><span
                                                                class="check"></span><span
                                                                class="control-label">crisis</span></label><label
                                                            class="b-radio radio is-capitalized is-small"><input
                                                                type="radio" name="nocturna" value="nocturna"><span
                                                                class="check"></span><span
                                                                class="control-label">nocturna</span></label><label
                                                            class="b-radio radio is-capitalized is-small"><input
                                                                type="radio" name="seca" value="seca"><span
                                                                class="check"></span><span
                                                                class="control-label">seca</span></label><label
                                                            class="b-radio radio is-capitalized is-small"><input
                                                                type="radio" name="húmeda" value="húmeda"><span
                                                                class="check"></span><span
                                                                class="control-label">húmeda</span></label><label
                                                            class="b-radio radio is-capitalized is-small"><input
                                                                type="radio" name="otro" value="otro"><span
                                                                class="check"></span><span
                                                                class="control-label">otro</span></label></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="field" style="display: none;">
                                    <div class="field-body">
                                        <div class="field is-grouped">
                                            <div class="field is-floating-label" style="display: none;"><label
                                                    class="label">Otro</label>
                                                <div class="control is-small is-clearfix"><input type="text"
                                                        autocomplete="on" class="input is-small"></div>
                                            </div>
                                            <div class="field is-expanded is-floating-label"><label
                                                    class="label">Comentario</label>
                                                <div class="control is-small is-clearfix"><input type="text"
                                                        autocomplete="on" class="input is-small"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-3">
                                <div class="field">
                                    <div class="field-body">
                                        <div class="field is-grouped">
                                            <div class="field"><label class="switch is-small is-rounded"><input
                                                        type="checkbox" true-value="1" false-value="0"
                                                        value="false"><span class="check"></span><span
                                                        class="control-label">Expectoración</span></label></div>
                                            <div class="field" style="display: none;">
                                                <div class="field-body">
                                                    <div class="field has-addons"><label
                                                            class="b-radio radio is-capitalized is-small"><input
                                                                type="radio" name="mucosa" value="mucosa"><span
                                                                class="check"></span><span
                                                                class="control-label">mucosa</span></label><label
                                                            class="b-radio radio is-capitalized is-small"><input
                                                                type="radio" name="mucosa-purulenta"
                                                                value="mucosa-purulenta"><span
                                                                class="check"></span><span
                                                                class="control-label">mucosa-purulenta</span></label><label
                                                            class="b-radio radio is-capitalized is-small"><input
                                                                type="radio" name="hemoptoica" value="hemoptoica"><span
                                                                class="check"></span><span
                                                                class="control-label">hemoptoica</span></label><label
                                                            class="b-radio radio is-capitalized is-small"><input
                                                                type="radio" name="hemoptisis" value="hemoptisis"><span
                                                                class="check"></span><span
                                                                class="control-label">hemoptisis</span></label><label
                                                            class="b-radio radio is-capitalized is-small"><input
                                                                type="radio" name="broncorrea" value="broncorrea"><span
                                                                class="check"></span><span
                                                                class="control-label">broncorrea</span></label><label
                                                            class="b-radio radio is-capitalized is-small"><input
                                                                type="radio" name="vomica" value="vomica"><span
                                                                class="check"></span><span
                                                                class="control-label">vomica</span></label><label
                                                            class="b-radio radio is-capitalized is-small"><input
                                                                type="radio" name="otro" value="otro"><span
                                                                class="check"></span><span
                                                                class="control-label">otro</span></label></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="field" style="display: none;">
                                    <div class="field-body">
                                        <div class="field is-grouped">
                                            <div class="field is-floating-label" style="display: none;"><label
                                                    class="label">Otro</label>
                                                <div class="control is-small is-clearfix"><input type="text"
                                                        autocomplete="on" class="input is-small"></div>
                                            </div>
                                            <div class="field is-expanded is-floating-label"><label
                                                    class="label">Comentario</label>
                                                <div class="control is-small is-clearfix"><input type="text"
                                                        autocomplete="on" class="input is-small"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-3">
                                <div class="field">
                                    <div class="field-body">
                                        <div class="field is-grouped">
                                            <div class="field"><label class="switch is-small is-rounded"><input
                                                        type="checkbox" true-value="1" false-value="0"
                                                        value="false"><span class="check"></span><span
                                                        class="control-label">Dolor precordial</span></label></div>
                                            <div class="field" style="display: none;">
                                                <div class="field-body">
                                                    <div class="field has-addons">
                                                        <div class="field is-floating-label"><label
                                                                class="label">Localización</label>
                                                            <div class="control is-small is-clearfix"><input type="text"
                                                                    autocomplete="on" class="input is-small"></div>
                                                        </div><label
                                                            class="b-radio radio is-capitalized is-small"><input
                                                                type="radio" name="intenso" value="intenso"><span
                                                                class="check"></span><span
                                                                class="control-label">intenso</span></label><label
                                                            class="b-radio radio is-capitalized is-small"><input
                                                                type="radio" name="variable" value="variable"><span
                                                                class="check"></span><span
                                                                class="control-label">variable</span></label><label
                                                            class="b-radio radio is-capitalized is-small"><input
                                                                type="radio" name="duradero" value="duradero"><span
                                                                class="check"></span><span
                                                                class="control-label">duradero</span></label><label
                                                            class="b-radio radio is-capitalized is-small"><input
                                                                type="radio" name="otro" value="otro"><span
                                                                class="check"></span><span
                                                                class="control-label">otro</span></label>
                                                        <div class="field is-floating-label" style="display: none;">
                                                            <label class="label">Otro</label>
                                                            <div class="control is-small is-clearfix"><input type="text"
                                                                    autocomplete="on" class="input is-small"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="field" style="display: none;">
                                    <div class="field-body">
                                        <div class="field is-grouped">
                                            <div class="field is-floating-label"><label class="label">Evolucion</label>
                                                <div class="control is-small is-clearfix"><input type="text"
                                                        autocomplete="on" class="input is-small"></div>
                                            </div>
                                            <div class="field is-expanded is-floating-label"><label
                                                    class="label">Comentario</label>
                                                <div class="control is-small is-clearfix"><input type="text"
                                                        autocomplete="on" class="input is-small"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-3">
                                <div class="field">
                                    <div class="field-body">
                                        <div class="field is-grouped">
                                            <div class="field"><label class="switch is-small is-rounded"><input
                                                        type="checkbox" true-value="1" false-value="0"
                                                        value="false"><span class="check"></span><span
                                                        class="control-label">Dolor Costal Izquierdo</span></label>
                                            </div>
                                            <div class="field" style="display: none;">
                                                <div class="field-body">
                                                    <div class="field has-addons">
                                                        <div class="field is-floating-label"><label
                                                                class="label">Localización</label>
                                                            <div class="control is-small is-clearfix"><input type="text"
                                                                    autocomplete="on" class="input is-small"></div>
                                                        </div><label
                                                            class="b-radio radio is-capitalized is-small"><input
                                                                type="radio" name="intenso" value="intenso"><span
                                                                class="check"></span><span
                                                                class="control-label">intenso</span></label><label
                                                            class="b-radio radio is-capitalized is-small"><input
                                                                type="radio" name="variable" value="variable"><span
                                                                class="check"></span><span
                                                                class="control-label">variable</span></label><label
                                                            class="b-radio radio is-capitalized is-small"><input
                                                                type="radio" name="duradero" value="duradero"><span
                                                                class="check"></span><span
                                                                class="control-label">duradero</span></label><label
                                                            class="b-radio radio is-capitalized is-small"><input
                                                                type="radio" name="otro" value="otro"><span
                                                                class="check"></span><span
                                                                class="control-label">otro</span></label>
                                                        <div class="field is-floating-label" style="display: none;">
                                                            <label class="label">Otro</label>
                                                            <div class="control is-small is-clearfix"><input type="text"
                                                                    autocomplete="on" class="input is-small"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="field" style="display: none;">
                                    <div class="field-body">
                                        <div class="field is-grouped">
                                            <div class="field is-floating-label"><label class="label">Evolucion</label>
                                                <div class="control is-small is-clearfix"><input type="text"
                                                        autocomplete="on" class="input is-small"></div>
                                            </div>
                                            <div class="field is-expanded is-floating-label"><label
                                                    class="label">Comentario</label>
                                                <div class="control is-small is-clearfix"><input type="text"
                                                        autocomplete="on" class="input is-small"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-3">
                                <div class="field">
                                    <div class="field-body">
                                        <div class="field is-grouped">
                                            <div class="field"><label class="switch is-small is-rounded"><input
                                                        type="checkbox" true-value="1" false-value="0"
                                                        value="false"><span class="check"></span><span
                                                        class="control-label">Dolor Costal Izquierdo</span></label>
                                            </div>
                                            <div class="field" style="display: none;">
                                                <div class="field-body">
                                                    <div class="field has-addons">
                                                        <div class="field is-floating-label"><label
                                                                class="label">Localización</label>
                                                            <div class="control is-small is-clearfix"><input type="text"
                                                                    autocomplete="on" class="input is-small"></div>
                                                        </div><label
                                                            class="b-radio radio is-capitalized is-small"><input
                                                                type="radio" name="intenso" value="intenso"><span
                                                                class="check"></span><span
                                                                class="control-label">intenso</span></label><label
                                                            class="b-radio radio is-capitalized is-small"><input
                                                                type="radio" name="variable" value="variable"><span
                                                                class="check"></span><span
                                                                class="control-label">variable</span></label><label
                                                            class="b-radio radio is-capitalized is-small"><input
                                                                type="radio" name="duradero" value="duradero"><span
                                                                class="check"></span><span
                                                                class="control-label">duradero</span></label><label
                                                            class="b-radio radio is-capitalized is-small"><input
                                                                type="radio" name="otro" value="otro"><span
                                                                class="check"></span><span
                                                                class="control-label">otro</span></label>
                                                        <div class="field is-floating-label" style="display: none;">
                                                            <label class="label">Otro</label>
                                                            <div class="control is-small is-clearfix"><input type="text"
                                                                    autocomplete="on" class="input is-small"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="field" style="display: none;">
                                    <div class="field-body">
                                        <div class="field is-grouped">
                                            <div class="field is-floating-label"><label class="label">Evolucion</label>
                                                <div class="control is-small is-clearfix"><input type="text"
                                                        autocomplete="on" class="input is-small"></div>
                                            </div>
                                            <div class="field is-expanded is-floating-label"><label
                                                    class="label">Comentario</label>
                                                <div class="control is-small is-clearfix"><input type="text"
                                                        autocomplete="on" class="input is-small"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-3">
                                <div class="field">
                                    <div class="field-body">
                                        <div class="field is-grouped">
                                            <div class="field"><label class="switch is-small is-rounded"><input
                                                        type="checkbox" true-value="1" false-value="0"
                                                        value="false"><span class="check"></span><span
                                                        class="control-label">Dolor Abdominal</span></label></div>
                                            <div class="field" style="display: none;">
                                                <div class="field-body">
                                                    <div class="field has-addons">
                                                        <div class="field is-floating-label"><label
                                                                class="label">Localización</label>
                                                            <div class="control is-small is-clearfix"><input type="text"
                                                                    autocomplete="on" class="input is-small"></div>
                                                        </div><label
                                                            class="b-radio radio is-capitalized is-small"><input
                                                                type="radio" name="intenso" value="intenso"><span
                                                                class="check"></span><span
                                                                class="control-label">intenso</span></label><label
                                                            class="b-radio radio is-capitalized is-small"><input
                                                                type="radio" name="variable" value="variable"><span
                                                                class="check"></span><span
                                                                class="control-label">variable</span></label><label
                                                            class="b-radio radio is-capitalized is-small"><input
                                                                type="radio" name="duradero" value="duradero"><span
                                                                class="check"></span><span
                                                                class="control-label">duradero</span></label><label
                                                            class="b-radio radio is-capitalized is-small"><input
                                                                type="radio" name="otro" value="otro"><span
                                                                class="check"></span><span
                                                                class="control-label">otro</span></label>
                                                        <div class="field is-floating-label" style="display: none;">
                                                            <label class="label">Otro</label>
                                                            <div class="control is-small is-clearfix"><input type="text"
                                                                    autocomplete="on" class="input is-small"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="field" style="display: none;">
                                    <div class="field-body">
                                        <div class="field is-grouped">
                                            <div class="field is-floating-label"><label class="label">Evolucion</label>
                                                <div class="control is-small is-clearfix"><input type="text"
                                                        autocomplete="on" class="input is-small"></div>
                                            </div>
                                            <div class="field is-expanded is-floating-label"><label
                                                    class="label">Comentario</label>
                                                <div class="control is-small is-clearfix"><input type="text"
                                                        autocomplete="on" class="input is-small"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-3">
                                <div class="field">
                                    <div class="field-body">
                                        <div class="field is-grouped">
                                            <div class="field"><label class="switch is-small is-rounded"><input
                                                        type="checkbox" true-value="1" false-value="0"
                                                        value="false"><span class="check"></span><span
                                                        class="control-label">Dolor Articular</span></label></div>
                                            <div class="field" style="display: none;">
                                                <div class="field-body">
                                                    <div class="field has-addons">
                                                        <div class="field is-floating-label"><label
                                                                class="label">Localización</label>
                                                            <div class="control is-small is-clearfix"><input type="text"
                                                                    autocomplete="on" class="input is-small"></div>
                                                        </div><label
                                                            class="b-radio radio is-capitalized is-small"><input
                                                                type="radio" name="intenso" value="intenso"><span
                                                                class="check"></span><span
                                                                class="control-label">intenso</span></label><label
                                                            class="b-radio radio is-capitalized is-small"><input
                                                                type="radio" name="variable" value="variable"><span
                                                                class="check"></span><span
                                                                class="control-label">variable</span></label><label
                                                            class="b-radio radio is-capitalized is-small"><input
                                                                type="radio" name="duradero" value="duradero"><span
                                                                class="check"></span><span
                                                                class="control-label">duradero</span></label><label
                                                            class="b-radio radio is-capitalized is-small"><input
                                                                type="radio" name="otro" value="otro"><span
                                                                class="check"></span><span
                                                                class="control-label">otro</span></label>
                                                        <div class="field is-floating-label" style="display: none;">
                                                            <label class="label">Otro</label>
                                                            <div class="control is-small is-clearfix"><input type="text"
                                                                    autocomplete="on" class="input is-small"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="field" style="display: none;">
                                    <div class="field-body">
                                        <div class="field is-grouped">
                                            <div class="field is-floating-label"><label class="label">Evolucion</label>
                                                <div class="control is-small is-clearfix"><input type="text"
                                                        autocomplete="on" class="input is-small"></div>
                                            </div>
                                            <div class="field is-expanded is-floating-label"><label
                                                    class="label">Comentario</label>
                                                <div class="control is-small is-clearfix"><input type="text"
                                                        autocomplete="on" class="input is-small"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-3">
                                <div class="field">
                                    <div class="field-body">
                                        <div class="field is-grouped">
                                            <div class="field"><label class="switch is-small is-rounded"><input
                                                        type="checkbox" true-value="1" false-value="0"
                                                        value="false"><span class="check"></span><span
                                                        class="control-label">Otras dolencias</span></label></div>
                                            <div class="field" style="display: none;">
                                                <div class="field-body">
                                                    <div class="field has-addons">
                                                        <div class="field is-floating-label"><label
                                                                class="label">Localización</label>
                                                            <div class="control is-small is-clearfix"><input type="text"
                                                                    autocomplete="on" class="input is-small"></div>
                                                        </div><label
                                                            class="b-radio radio is-capitalized is-small"><input
                                                                type="radio" name="intenso" value="intenso"><span
                                                                class="check"></span><span
                                                                class="control-label">intenso</span></label><label
                                                            class="b-radio radio is-capitalized is-small"><input
                                                                type="radio" name="variable" value="variable"><span
                                                                class="check"></span><span
                                                                class="control-label">variable</span></label><label
                                                            class="b-radio radio is-capitalized is-small"><input
                                                                type="radio" name="duradero" value="duradero"><span
                                                                class="check"></span><span
                                                                class="control-label">duradero</span></label><label
                                                            class="b-radio radio is-capitalized is-small"><input
                                                                type="radio" name="otro" value="otro"><span
                                                                class="check"></span><span
                                                                class="control-label">otro</span></label>
                                                        <div class="field is-floating-label" style="display: none;">
                                                            <label class="label">Otro</label>
                                                            <div class="control is-small is-clearfix"><input type="text"
                                                                    autocomplete="on" class="input is-small"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="field" style="display: none;">
                                    <div class="field-body">
                                        <div class="field is-grouped">
                                            <div class="field is-floating-label"><label class="label">Evolucion</label>
                                                <div class="control is-small is-clearfix"><input type="text"
                                                        autocomplete="on" class="input is-small"></div>
                                            </div>
                                            <div class="field is-expanded is-floating-label"><label
                                                    class="label">Comentario</label>
                                                <div class="control is-small is-clearfix"><input type="text"
                                                        autocomplete="on" class="input is-small"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-3">
                                <div class="field">
                                    <div class="field-body">
                                        <div class="field is-grouped">
                                            <div class="field"><label class="switch is-small is-rounded"><input
                                                        type="checkbox" true-value="1" false-value="0"
                                                        value="false"><span class="check"></span><span
                                                        class="control-label">Problemas Digestivos</span></label></div>
                                            <div class="field" style="display: none;">
                                                <div class="field-body">
                                                    <div class="field has-addons"><label
                                                            class="b-radio radio is-capitalized is-small"><input
                                                                type="radio" name="polifagia" value="polifagia"><span
                                                                class="check"></span><span
                                                                class="control-label">polifagia</span></label><label
                                                            class="b-radio radio is-capitalized is-small"><input
                                                                type="radio" name="inapetencia"
                                                                value="inapetencia"><span class="check"></span><span
                                                                class="control-label">inapetencia</span></label><label
                                                            class="b-radio radio is-capitalized is-small"><input
                                                                type="radio" name="nauseas" value="nauseas"><span
                                                                class="check"></span><span
                                                                class="control-label">nauseas</span></label><label
                                                            class="b-radio radio is-capitalized is-small"><input
                                                                type="radio" name="reflujo" value="reflujo"><span
                                                                class="check"></span><span
                                                                class="control-label">reflujo</span></label><label
                                                            class="b-radio radio is-capitalized is-small"><input
                                                                type="radio" name="diarrea" value="diarrea"><span
                                                                class="check"></span><span
                                                                class="control-label">diarrea</span></label><label
                                                            class="b-radio radio is-capitalized is-small"><input
                                                                type="radio" name="constipacion"
                                                                value="constipacion"><span class="check"></span><span
                                                                class="control-label">constipacion</span></label><label
                                                            class="b-radio radio is-capitalized is-small"><input
                                                                type="radio" name="heces_negras"
                                                                value="heces_negras"><span class="check"></span><span
                                                                class="control-label">heces_negras</span></label><label
                                                            class="b-radio radio is-capitalized is-small"><input
                                                                type="radio" name="otro" value="otro"><span
                                                                class="check"></span><span
                                                                class="control-label">otro</span></label></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="field" style="display: none;">
                                    <div class="field-body">
                                        <div class="field is-grouped">
                                            <div class="field is-floating-label" style="display: none;"><label
                                                    class="label">Otro</label>
                                                <div class="control is-small is-clearfix"><input type="text"
                                                        autocomplete="on" class="input is-small"></div>
                                            </div>
                                            <div class="field is-expanded is-floating-label"><label
                                                    class="label">Comentario</label>
                                                <div class="control is-small is-clearfix"><input type="text"
                                                        autocomplete="on" class="input is-small"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-3">
                                <div class="field">
                                    <div class="field-body">
                                        <div class="field is-grouped">
                                            <div class="field"><label class="switch is-small is-rounded"><input
                                                        type="checkbox" true-value="1" false-value="0"
                                                        value="false"><span class="check"></span><span
                                                        class="control-label">Problemas de Orina</span></label></div>
                                            <div class="field" style="display: none;">
                                                <div class="field-body">
                                                    <div class="field has-addons"><label
                                                            class="b-radio radio is-capitalized is-small"><input
                                                                type="radio" name="polifagia" value="polifagia"><span
                                                                class="check"></span><span
                                                                class="control-label">polifagia</span></label><label
                                                            class="b-radio radio is-capitalized is-small"><input
                                                                type="radio" name="inapetencia"
                                                                value="inapetencia"><span class="check"></span><span
                                                                class="control-label">inapetencia</span></label><label
                                                            class="b-radio radio is-capitalized is-small"><input
                                                                type="radio" name="nauseas" value="nauseas"><span
                                                                class="check"></span><span
                                                                class="control-label">nauseas</span></label><label
                                                            class="b-radio radio is-capitalized is-small"><input
                                                                type="radio" name="reflujo" value="reflujo"><span
                                                                class="check"></span><span
                                                                class="control-label">reflujo</span></label><label
                                                            class="b-radio radio is-capitalized is-small"><input
                                                                type="radio" name="diarrea" value="diarrea"><span
                                                                class="check"></span><span
                                                                class="control-label">diarrea</span></label><label
                                                            class="b-radio radio is-capitalized is-small"><input
                                                                type="radio" name="constipacion"
                                                                value="constipacion"><span class="check"></span><span
                                                                class="control-label">constipacion</span></label><label
                                                            class="b-radio radio is-capitalized is-small"><input
                                                                type="radio" name="heces_negras"
                                                                value="heces_negras"><span class="check"></span><span
                                                                class="control-label">heces_negras</span></label><label
                                                            class="b-radio radio is-capitalized is-small"><input
                                                                type="radio" name="otro" value="otro"><span
                                                                class="check"></span><span
                                                                class="control-label">otro</span></label></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="field" style="display: none;">
                                    <div class="field-body">
                                        <div class="field is-grouped">
                                            <div class="field is-floating-label" style="display: none;"><label
                                                    class="label">Otro</label>
                                                <div class="control is-small is-clearfix"><input type="text"
                                                        autocomplete="on" class="input is-small"></div>
                                            </div>
                                            <div class="field is-expanded is-floating-label"><label
                                                    class="label">Comentario</label>
                                                <div class="control is-small is-clearfix"><input type="text"
                                                        autocomplete="on" class="input is-small"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="field">
                                <div class="field-body">
                                    <div class="field is-grouped is-grouped-multiline">
                                        <div class="control"><label class="switch is-small is-rounded"><input
                                                    type="checkbox" true-value="1" false-value="0" value="false"><span
                                                    class="check"></span><span
                                                    class="control-label">Cefalea</span></label></div>
                                        <div class="control"><label class="switch is-small is-rounded"><input
                                                    type="checkbox" true-value="1" false-value="0" value="false"><span
                                                    class="check"></span><span
                                                    class="control-label">Vértigo</span></label></div>
                                        <div class="control"><label class="switch is-small is-rounded"><input
                                                    type="checkbox" true-value="1" false-value="0" value="false"><span
                                                    class="check"></span><span
                                                    class="control-label">Acúfenos</span></label></div>
                                        <div class="control"><label class="switch is-small is-rounded"><input
                                                    type="checkbox" true-value="1" false-value="0" value="false"><span
                                                    class="check"></span><span
                                                    class="control-label">Fotofobias</span></label></div>
                                        <div class="control"><label class="switch is-small is-rounded"><input
                                                    type="checkbox" true-value="1" false-value="0" value="false"><span
                                                    class="check"></span><span
                                                    class="control-label">Diplopia</span></label></div>
                                        <div class="control"><label class="switch is-small is-rounded"><input
                                                    type="checkbox" true-value="1" false-value="0" value="false"><span
                                                    class="check"></span><span
                                                    class="control-label">Parestesias</span></label></div>
                                        <div class="control"><label class="switch is-small is-rounded"><input
                                                    type="checkbox" true-value="1" false-value="0" value="false"><span
                                                    class="check"></span><span
                                                    class="control-label">Fiebre</span></label></div>
                                        <div class="control"><label class="switch is-small is-rounded"><input
                                                    type="checkbox" true-value="1" false-value="0" value="false"><span
                                                    class="check"></span><span class="control-label">Pérdida de
                                                    peso</span></label></div>
                                        <div class="control"><label class="switch is-small is-rounded"><input
                                                    type="checkbox" true-value="1" false-value="0" value="false"><span
                                                    class="check"></span><span
                                                    class="control-label">Astenia</span></label></div>
                                        <div class="control"><label class="switch is-small is-rounded"><input
                                                    type="checkbox" true-value="1" false-value="0" value="false"><span
                                                    class="check"></span><span
                                                    class="control-label">Alergia</span></label></div>
                                        <div class="control"><label class="switch is-small is-rounded"><input
                                                    type="checkbox" true-value="1" false-value="0" value="false"><span
                                                    class="check"></span><span
                                                    class="control-label">Erupciones</span></label></div>
                                    </div>
                                </div>
                            </div>
                            <div class="field">
                                <div class="field-body">
                                    <div class="field is-grouped">
                                        <div class="field is-expanded is-floating-label"><label class="label">Otros
                                                motivos</label>
                                            <div class="control is-clearfix"><input type="text" autocomplete="on"
                                                    class="input"></div>
                                        </div>
                                        <div class="field is-expanded is-floating-label"><label
                                                class="label">Comentarios generales</label>
                                            <div class="control is-clearfix"><input type="text" autocomplete="on"
                                                    class="input"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="field"><label class="switch is-small is-rounded"><input type="checkbox"
                                        true-value="true" value="false"><span class="check"></span><span
                                        class="control-label">Paciente referido</span></label></div>
                            <div class="field">
                                <p class="control has-text-centered"><button type="submit"
                                        class="button is-primary"><span>Guardar Motivo</span></button></p>
                            </div>
                        </div>
                    </div>
          </form>
        </Tab>
        <Tab :is-selected="selected === 'Evaluacion Fisica'">
          <form>
                    <div class="card">
                        <header class="card-header">
                            <p class="card-header-title"> Constitución física </p>
                        </header>
                        <div class="card-content">
                            <div class="field">
                                <div class="field-body">
                                    <div class="field is-grouped">
                                        <div class="field is-floating-label"><label class="label">Estatura</label>
                                            <div class="control is-small is-clearfix"><input type="text"
                                                    autocomplete="on" readonly="readonly" class="input is-small"></div>
                                        </div>
                                        <div class="field is-floating-label"><label class="label">IMC</label>
                                            <div class="control is-small is-clearfix"><input type="text"
                                                    autocomplete="on" readonly="readonly" class="input is-small"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="field">
                                <div class="field-body">
                                    <div class="field is-grouped">
                                        <div class="field is-floating-label"><label class="label">Kilos</label>
                                            <div class="control is-small is-clearfix"><input type="text"
                                                    autocomplete="on" class="input is-small"></div>
                                        </div>
                                        <div class="field is-floating-label"><label class="label">Gramos</label>
                                            <div class="control is-small is-clearfix"><input type="text"
                                                    autocomplete="on" class="input is-small"></div>
                                        </div>
                                        <div class="field is-floating-label"><label class="label">Condición</label>
                                            <div class="control is-small is-clearfix"><input type="text"
                                                    autocomplete="on" readonly="readonly" class="input is-small"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <header class="card-header">
                            <p class="card-header-title"> Marcha </p>
                        </header>
                        <div class="card-content">
                            <div class="mb-3">
                                <div class="field">
                                    <div class="field-body">
                                        <div class="field is-grouped">
                                            <div class="field"><label class="switch is-small is-rounded"><input
                                                        type="checkbox" true-value="1" false-value="0"
                                                        value="false"><span class="check"></span><span
                                                        class="control-label">Marcha</span></label></div>
                                            <div class="field" style="display: none;">
                                                <div class="field-body">
                                                    <div class="field has-addons"><label
                                                            class="b-checkbox checkbox is-capitalized is-small"><input
                                                                type="checkbox" autocomplete="on" true-value="true"
                                                                value="deficiencia_muscular"><span
                                                                class="check"></span><span
                                                                class="control-label">deficiencia_muscular</span></label><label
                                                            class="b-checkbox checkbox is-capitalized is-small"><input
                                                                type="checkbox" autocomplete="on" true-value="true"
                                                                value="debilidad_muscular"><span
                                                                class="check"></span><span
                                                                class="control-label">debilidad_muscular</span></label><label
                                                            class="b-checkbox checkbox is-capitalized is-small"><input
                                                                type="checkbox" autocomplete="on" true-value="true"
                                                                value="descontrol_motriz"><span
                                                                class="check"></span><span
                                                                class="control-label">descontrol_motriz</span></label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="field" style="display: none;">
                                    <div class="field-body">
                                        <div class="field is-grouped">
                                            <div class="field is-floating-label"><label class="label">Otro</label>
                                                <div class="control is-small is-clearfix"><input type="text"
                                                        autocomplete="on" class="input is-small"></div>
                                            </div>
                                            <div class="field is-expanded is-floating-label"><label
                                                    class="label">Comentario</label>
                                                <div class="control is-small is-clearfix"><input type="text"
                                                        autocomplete="on" class="input is-small"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-3">
                                <div class="field">
                                    <div class="field-body">
                                        <div class="field is-grouped">
                                            <div class="field"><label class="switch is-small is-rounded"><input
                                                        type="checkbox" true-value="1" false-value="0"
                                                        value="false"><span class="check"></span><span
                                                        class="control-label">Alteración Tipo Marcha</span></label>
                                            </div>
                                            <div class="field" style="display: none;">
                                                <div class="field-body">
                                                    <div class="field has-addons"><label
                                                            class="b-checkbox checkbox is-capitalized is-small"><input
                                                                type="checkbox" autocomplete="on" true-value="true"
                                                                value="ataxica"><span class="check"></span><span
                                                                class="control-label">ataxica</span></label><label
                                                            class="b-checkbox checkbox is-capitalized is-small"><input
                                                                type="checkbox" autocomplete="on" true-value="true"
                                                                value="cerebelosa"><span class="check"></span><span
                                                                class="control-label">cerebelosa</span></label><label
                                                            class="b-checkbox checkbox is-capitalized is-small"><input
                                                                type="checkbox" autocomplete="on" true-value="true"
                                                                value="espastica"><span class="check"></span><span
                                                                class="control-label">espastica</span></label><label
                                                            class="b-checkbox checkbox is-capitalized is-small"><input
                                                                type="checkbox" autocomplete="on" true-value="true"
                                                                value="hemiplegica"><span class="check"></span><span
                                                                class="control-label">hemiplegica</span></label><label
                                                            class="b-checkbox checkbox is-capitalized is-small"><input
                                                                type="checkbox" autocomplete="on" true-value="true"
                                                                value="parkinsoniana"><span class="check"></span><span
                                                                class="control-label">parkinsoniana</span></label></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="field" style="display: none;">
                                    <div class="field-body">
                                        <div class="field is-grouped">
                                            <div class="field is-floating-label"><label class="label">Otro</label>
                                                <div class="control is-small is-clearfix"><input type="text"
                                                        autocomplete="on" class="input is-small"></div>
                                            </div>
                                            <div class="field is-expanded is-floating-label"><label
                                                    class="label">Comentario</label>
                                                <div class="control is-small is-clearfix"><input type="text"
                                                        autocomplete="on" class="input is-small"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="field is-floating-label"><label class="label">Comentarios Generales
                                    Marcha</label>
                                <div class="control is-small is-clearfix"><input type="text" autocomplete="on"
                                        class="input is-small"></div>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <header class="card-header">
                            <p class="card-header-title"> Facie </p>
                        </header>
                        <div class="card-content">
                            <div class="mb-3">
                                <div class="field">
                                    <div class="field-body">
                                        <div class="field is-grouped">
                                            <div class="field"><label class="switch is-small is-rounded"><input
                                                        type="checkbox" true-value="1" false-value="0"
                                                        value="false"><span class="check"></span><span
                                                        class="control-label">Alteración Facie</span></label></div>
                                            <div class="field" style="display: none;">
                                                <div class="field-body">
                                                    <div class="field has-addons"><label
                                                            class="b-checkbox checkbox is-capitalized is-small"><input
                                                                type="checkbox" autocomplete="on" true-value="true"
                                                                value="sereno"><span class="check"></span><span
                                                                class="control-label">sereno</span></label><label
                                                            class="b-checkbox checkbox is-capitalized is-small"><input
                                                                type="checkbox" autocomplete="on" true-value="true"
                                                                value="angustiado"><span class="check"></span><span
                                                                class="control-label">angustiado</span></label><label
                                                            class="b-checkbox checkbox is-capitalized is-small"><input
                                                                type="checkbox" autocomplete="on" true-value="true"
                                                                value="depresivo"><span class="check"></span><span
                                                                class="control-label">depresivo</span></label><label
                                                            class="b-checkbox checkbox is-capitalized is-small"><input
                                                                type="checkbox" autocomplete="on" true-value="true"
                                                                value="exaltado"><span class="check"></span><span
                                                                class="control-label">exaltado</span></label></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="field" style="display: none;">
                                    <div class="field-body">
                                        <div class="field is-grouped">
                                            <div class="field is-floating-label"><label class="label">Otro</label>
                                                <div class="control is-small is-clearfix"><input type="text"
                                                        autocomplete="on" class="input is-small"></div>
                                            </div>
                                            <div class="field is-expanded is-floating-label"><label
                                                    class="label">Comentario</label>
                                                <div class="control is-small is-clearfix"><input type="text"
                                                        autocomplete="on" class="input is-small"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-3">
                                <div class="field">
                                    <div class="field-body">
                                        <div class="field is-grouped">
                                            <div class="field"><label class="switch is-small is-rounded"><input
                                                        type="checkbox" true-value="1" false-value="0"
                                                        value="false"><span class="check"></span><span
                                                        class="control-label">Alteración Tipo Facie</span></label></div>
                                            <div class="field" style="display: none;">
                                                <div class="field-body">
                                                    <div class="field has-addons"><label
                                                            class="b-checkbox checkbox is-capitalized is-small"><input
                                                                type="checkbox" autocomplete="on" true-value="true"
                                                                value="acromegalgica"><span class="check"></span><span
                                                                class="control-label">acromegalgica</span></label><label
                                                            class="b-checkbox checkbox is-capitalized is-small"><input
                                                                type="checkbox" autocomplete="on" true-value="true"
                                                                value="cushingoide"><span class="check"></span><span
                                                                class="control-label">cushingoide</span></label><label
                                                            class="b-checkbox checkbox is-capitalized is-small"><input
                                                                type="checkbox" autocomplete="on" true-value="true"
                                                                value="hipertiroidia"><span class="check"></span><span
                                                                class="control-label">hipertiroidia</span></label><label
                                                            class="b-checkbox checkbox is-capitalized is-small"><input
                                                                type="checkbox" autocomplete="on" true-value="true"
                                                                value="hipertiroidea"><span class="check"></span><span
                                                                class="control-label">hipertiroidea</span></label><label
                                                            class="b-checkbox checkbox is-capitalized is-small"><input
                                                                type="checkbox" autocomplete="on" true-value="true"
                                                                value="hipocratica"><span class="check"></span><span
                                                                class="control-label">hipocratica</span></label><label
                                                            class="b-checkbox checkbox is-capitalized is-small"><input
                                                                type="checkbox" autocomplete="on" true-value="true"
                                                                value="down"><span class="check"></span><span
                                                                class="control-label">down</span></label><label
                                                            class="b-checkbox checkbox is-capitalized is-small"><input
                                                                type="checkbox" autocomplete="on" true-value="true"
                                                                value="parkinsoniana"><span class="check"></span><span
                                                                class="control-label">parkinsoniana</span></label><label
                                                            class="b-checkbox checkbox is-capitalized is-small"><input
                                                                type="checkbox" autocomplete="on" true-value="true"
                                                                value="febril"><span class="check"></span><span
                                                                class="control-label">febril</span></label><label
                                                            class="b-checkbox checkbox is-capitalized is-small"><input
                                                                type="checkbox" autocomplete="on" true-value="true"
                                                                value="mitralica"><span class="check"></span><span
                                                                class="control-label">mitralica</span></label></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="field" style="display: none;">
                                    <div class="field-body">
                                        <div class="field is-grouped">
                                            <div class="field is-floating-label"><label class="label">Otro</label>
                                                <div class="control is-small is-clearfix"><input type="text"
                                                        autocomplete="on" class="input is-small"></div>
                                            </div>
                                            <div class="field is-expanded is-floating-label"><label
                                                    class="label">Comentario</label>
                                                <div class="control is-small is-clearfix"><input type="text"
                                                        autocomplete="on" class="input is-small"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="field is-floating-label"><label class="label">Comentarios generales
                                    facie</label>
                                <div class="control is-small is-clearfix"><input type="text" autocomplete="on"
                                        class="input is-small"></div>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <header class="card-header">
                            <p class="card-header-title"> Postura </p>
                        </header>
                        <div class="card-content">
                            <div class="mb-3">
                                <div class="field">
                                    <div class="field-body">
                                        <div class="field is-grouped">
                                            <div class="field"><label class="switch is-small is-rounded"><input
                                                        type="checkbox" true-value="1" false-value="0"
                                                        value="false"><span class="check"></span><span
                                                        class="control-label">Alteración Postura de Pie</span></label>
                                            </div>
                                            <div class="field" style="display: none;">
                                                <div class="field-body">
                                                    <div class="field has-addons"><label
                                                            class="b-checkbox checkbox is-capitalized is-small"><input
                                                                type="checkbox" autocomplete="on" true-value="true"
                                                                value="inclinacion frontal"><span
                                                                class="check"></span><span
                                                                class="control-label">inclinacion
                                                                frontal</span></label><label
                                                            class="b-checkbox checkbox is-capitalized is-small"><input
                                                                type="checkbox" autocomplete="on" true-value="true"
                                                                value="inclinacion lateral iz"><span
                                                                class="check"></span><span
                                                                class="control-label">inclinacion lateral
                                                                iz</span></label><label
                                                            class="b-checkbox checkbox is-capitalized is-small"><input
                                                                type="checkbox" autocomplete="on" true-value="true"
                                                                value="inclinacion lateral de"><span
                                                                class="check"></span><span
                                                                class="control-label">inclinacion lateral
                                                                de</span></label><label
                                                            class="b-checkbox checkbox is-capitalized is-small"><input
                                                                type="checkbox" autocomplete="on" true-value="true"
                                                                value="dolor"><span class="check"></span><span
                                                                class="control-label">dolor</span></label><label
                                                            class="b-checkbox checkbox is-capitalized is-small"><input
                                                                type="checkbox" autocomplete="on" true-value="true"
                                                                value="asimetria"><span class="check"></span><span
                                                                class="control-label">asimetria</span></label></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="field" style="display: none;">
                                    <div class="field-body">
                                        <div class="field is-grouped">
                                            <div class="field is-floating-label"><label class="label">Otro</label>
                                                <div class="control is-small is-clearfix"><input type="text"
                                                        autocomplete="on" class="input is-small"></div>
                                            </div>
                                            <div class="field is-expanded is-floating-label"><label
                                                    class="label">Comentario</label>
                                                <div class="control is-small is-clearfix"><input type="text"
                                                        autocomplete="on" class="input is-small"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="columns">
                                <div class="column is-3">
                                    <div class="field"><label class="switch is-small is-rounded"><input type="checkbox"
                                                true-value="true" value="false"><span class="check"></span><span
                                                class="control-label">Cubito Supino</span></label></div>
                                </div>
                                <div class="column is-3">
                                    <div class="field"><label class="switch is-small is-rounded"><input type="checkbox"
                                                true-value="true" value="false"><span class="check"></span><span
                                                class="control-label">Cubito Prono</span></label></div>
                                </div>
                                <div class="column is-3">
                                    <div class="field"><label class="switch is-small is-rounded"><input type="checkbox"
                                                true-value="true" value="false"><span class="check"></span><span
                                                class="control-label">Lateral Izquierdo</span></label></div>
                                </div>
                                <div class="column is-3">
                                    <div class="field"><label class="switch is-small is-rounded"><input type="checkbox"
                                                true-value="true" value="false"><span class="check"></span><span
                                                class="control-label">Lateral Derecho</span></label></div>
                                </div>
                            </div>
                            <div class="field is-floating-label"><label class="label">Comentarios Generales
                                    Postura</label>
                                <div class="control is-small is-clearfix"><input type="text" autocomplete="on"
                                        class="input is-small"></div>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <header class="card-header">
                            <p class="card-header-title"> Piel </p>
                        </header>
                        <div class="card-content">
                            <div class="field">
                                <div class="field-body">
                                    <div class="field is-grouped">
                                        <div class="field is-floating-label"><label class="label">Color y tono</label>
                                            <div class="control is-small is-clearfix"><input type="text"
                                                    autocomplete="on" class="input is-small"></div>
                                        </div>
                                        <div class="field">
                                            <div class="field-body">
                                                <div class="field has-addons"><label
                                                        class="b-checkbox checkbox is-small"><input type="checkbox"
                                                            autocomplete="on" true-value="true" value="palidez"><span
                                                            class="check"></span><span
                                                            class="control-label">Pálidez</span></label><label
                                                        class="b-checkbox checkbox is-small"><input type="checkbox"
                                                            autocomplete="on" true-value="true" value="cianosis"><span
                                                            class="check"></span><span
                                                            class="control-label">Cianosis</span></label><label
                                                        class="b-checkbox checkbox is-small"><input type="checkbox"
                                                            autocomplete="on" true-value="true"
                                                            value="tono-icterico"><span class="check"></span><span
                                                            class="control-label">Tonalidad
                                                            Ictérica</span></label><label
                                                        class="b-checkbox checkbox is-small"><input type="checkbox"
                                                            autocomplete="on" true-value="true"
                                                            value="hipopigmentacion"><span class="check"></span><span
                                                            class="control-label">Hipopigmentación</span></label><label
                                                        class="b-checkbox checkbox is-small"><input type="checkbox"
                                                            autocomplete="on" true-value="true"
                                                            value="hiperpigmentacion"><span class="check"></span><span
                                                            class="control-label">Hiperpigmentación</span></label><label
                                                        class="b-checkbox checkbox is-small"><input type="checkbox"
                                                            autocomplete="on" true-value="true" value="albinismo"><span
                                                            class="check"></span><span
                                                            class="control-label">Albinismo</span></label><label
                                                        class="b-checkbox checkbox is-small"><input type="checkbox"
                                                            autocomplete="on" true-value="true" value="vitiligo"><span
                                                            class="check"></span><span
                                                            class="control-label">Vitiligo</span></label></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="field">
                                <div class="field-body">
                                    <div class="field is-grouped">
                                        <div class="field is-expanded is-floating-label"><label
                                                class="label">Otros</label>
                                            <div class="control is-small is-clearfix"><input type="text"
                                                    autocomplete="on" class="input is-small"></div>
                                        </div>
                                        <div class="field is-expanded is-floating-label"><label class="label">Comentario
                                                Color y Tono</label>
                                            <div class="control is-small is-clearfix"><input type="text"
                                                    autocomplete="on" class="input is-small"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="field">
                                <div class="field-body">
                                    <div class="field is-grouped">
                                        <div class="field"><label class="switch is-small is-rounded"><input
                                                    type="checkbox" true-value="true" value="false"><span
                                                    class="check"></span><span class="control-label">Alteración
                                                    Humectación</span></label></div>
                                    </div>
                                </div>
                            </div>
                            <div class="field">
                                <div class="field-body">
                                    <div class="field is-grouped">
                                        <div class="field"><label class="switch is-small is-rounded"><input
                                                    type="checkbox" true-value="true" value="false"><span
                                                    class="check"></span><span class="control-label">Turgencia
                                                    Normal</span></label></div>
                                        <div class="field"><label class="switch is-small is-rounded"><input
                                                    type="checkbox" true-value="true" value="false"><span
                                                    class="check"></span><span class="control-label">Elasticidad
                                                    Normal</span></label></div>
                                    </div>
                                </div>
                            </div>
                            <div class="field">
                                <div class="field-body">
                                    <div class="field is-grouped">
                                        <div class="field is-expanded is-floating-label"><label
                                                class="label">Otros</label>
                                            <div class="control is-small is-clearfix"><input type="text"
                                                    autocomplete="on" class="input is-small"></div>
                                        </div>
                                        <div class="field is-expanded is-floating-label"><label class="label">Comentario
                                                Turgencia y Elasticidad</label>
                                            <div class="control is-small is-clearfix"><input type="text"
                                                    autocomplete="on" class="input is-small"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="field"><label class="switch is-small is-rounded"><input type="checkbox"
                                        true-value="true" value="false"><span class="check"></span><span
                                        class="control-label">Lesión Cutánea</span></label></div>
                            <div class="field"><label class="switch is-small is-rounded"><input type="checkbox"
                                        true-value="true" value="false"><span class="check"></span><span
                                        class="control-label">Alteración Uñas</span></label></div><br>
                            <div class="field is-floating-label"><label class="label">Comentarios Generales Piel</label>
                                <div class="control is-small is-clearfix"><input type="text" autocomplete="on"
                                        class="input is-small"></div>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <header class="card-header">
                            <p class="card-header-title"> Sistema Linfático </p>
                        </header>
                        <div class="card-content">
                            <div class="field">
                                <div class="field-body">
                                    <div class="field is-grouped">
                                        <div class="field"><label class="switch is-small is-rounded"><input
                                                    type="checkbox" true-value="true" value="false"><span
                                                    class="check"></span><span
                                                    class="control-label">Alteraciones</span></label></div>
                                    </div>
                                </div>
                            </div>
                            <div class="field"><label class="switch is-small is-rounded"><input type="checkbox"
                                        true-value="true" value="false"><span class="check"></span><span
                                        class="control-label">Aspectos identificables</span></label></div><br>
                            <div class="field is-floating-label"><label class="label">Comentarios Generales
                                    Linfático</label>
                                <div class="control is-small is-clearfix"><input type="text" autocomplete="on"
                                        class="input is-small"></div>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <header class="card-header">
                            <p class="card-header-title"> Pulsos Arteriales </p>
                        </header>
                        <div class="card-content">
                            <div class="field">
                                <div class="field-body">
                                    <div class="field is-grouped">
                                        <div class="field"><label class="switch is-small is-rounded"><input
                                                    type="checkbox" true-value="true" value="false"><span
                                                    class="check"></span><span class="control-label">Alteración Pulso
                                                    Arterial</span></label></div>
                                    </div>
                                </div>
                            </div>
                            <div class="field"><label class="switch is-small is-rounded"><input type="checkbox"
                                        true-value="true" value="false"><span class="check"></span><span
                                        class="control-label">Tipo de Pulso</span></label></div>
                            <div class="field">
                                <div class="field-body">
                                    <div class="field is-grouped">
                                        <div class="field is-floating-label"><label class="label">Palpación Izq</label>
                                            <div class="control is-small is-clearfix"><input type="text"
                                                    autocomplete="on" class="input is-small"></div>
                                        </div>
                                        <div class="field is-floating-label"><label class="label">Palpación Der</label>
                                            <div class="control is-small is-clearfix"><input type="text"
                                                    autocomplete="on" class="input is-small"></div>
                                        </div>
                                        <div class="field is-expanded is-floating-label"><label class="label">Comentario
                                                Tipo Pulso</label>
                                            <div class="control is-small is-clearfix"><input type="text"
                                                    autocomplete="on" class="input is-small"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="field">
                                <div class="field-body">
                                    <div class="field is-grouped">
                                        <div class="field"><label class="switch is-small is-rounded"><input
                                                    type="checkbox" true-value="true" value="false"><span
                                                    class="check"></span><span class="control-label">Alteración Pulso
                                                    Axilar Izq</span></label></div>
                                    </div>
                                </div>
                            </div>
                            <div class="field">
                                <div class="field-body">
                                    <div class="field is-grouped">
                                        <div class="field"><label class="switch is-small is-rounded"><input
                                                    type="checkbox" true-value="true" value="false"><span
                                                    class="check"></span><span class="control-label">Alteración Pulso
                                                    Axilar Der</span></label></div>
                                    </div>
                                </div>
                            </div>
                            <div class="field">
                                <div class="field-body">
                                    <div class="field is-grouped">
                                        <div class="field is-floating-label"><label class="label">Palpación Axilar
                                                Izq</label>
                                            <div class="control is-small is-clearfix"><input type="text"
                                                    autocomplete="on" class="input is-small"></div>
                                        </div>
                                        <div class="field is-floating-label"><label class="label">Palpación Axilar
                                                Der</label>
                                            <div class="control is-small is-clearfix"><input type="text"
                                                    autocomplete="on" class="input is-small"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr>
                            <div class="field">
                                <div class="field-body">
                                    <div class="field is-grouped">
                                        <div class="field"><label class="switch is-small is-rounded"><input
                                                    type="checkbox" true-value="true" value="false"><span
                                                    class="check"></span><span class="control-label">Alteración Pulso
                                                    Radial</span></label></div>
                                    </div>
                                </div>
                            </div>
                            <div class="field"><label class="switch is-small is-rounded"><input type="checkbox"
                                        true-value="true" value="false"><span class="check"></span><span
                                        class="control-label">Tipo de Pulso Radial</span></label></div>
                            <div class="field">
                                <div class="field-body">
                                    <div class="field is-grouped">
                                        <div class="field is-floating-label"><label class="label">Palpación Radial
                                                Izq</label>
                                            <div class="control is-small is-clearfix"><input type="text"
                                                    autocomplete="on" class="input is-small"></div>
                                        </div>
                                        <div class="field is-floating-label"><label class="label">Palpación Radial
                                                Der</label>
                                            <div class="control is-small is-clearfix"><input type="text"
                                                    autocomplete="on" class="input is-small"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr>
                            <div class="field">
                                <div class="field-body">
                                    <div class="field is-grouped">
                                        <div class="field"><label class="switch is-small is-rounded"><input
                                                    type="checkbox" true-value="true" value="false"><span
                                                    class="check"></span><span class="control-label">Alteración Pulso
                                                    Branquial</span></label></div>
                                    </div>
                                </div>
                            </div>
                            <div class="field"><label class="switch is-small is-rounded"><input type="checkbox"
                                        true-value="true" value="false"><span class="check"></span><span
                                        class="control-label">Tipo de Pulso Branquial</span></label></div>
                            <div class="field">
                                <div class="field-body">
                                    <div class="field is-grouped">
                                        <div class="field is-floating-label"><label class="label">Palpación Branquial
                                                Izq</label>
                                            <div class="control is-small is-clearfix"><input type="text"
                                                    autocomplete="on" class="input is-small"></div>
                                        </div>
                                        <div class="field is-floating-label"><label class="label">Palpación Branquial
                                                Der</label>
                                            <div class="control is-small is-clearfix"><input type="text"
                                                    autocomplete="on" class="input is-small"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr>
                            <div class="field">
                                <div class="field-body">
                                    <div class="field is-grouped">
                                        <div class="field"><label class="switch is-small is-rounded"><input
                                                    type="checkbox" true-value="true" value="false"><span
                                                    class="check"></span><span class="control-label">Alteración Pulso
                                                    Popliteo</span></label></div>
                                    </div>
                                </div>
                            </div>
                            <div class="field"><label class="switch is-small is-rounded"><input type="checkbox"
                                        true-value="true" value="false"><span class="check"></span><span
                                        class="control-label">Tipo de Pulso Popliteo</span></label></div>
                            <div class="field">
                                <div class="field-body">
                                    <div class="field is-grouped">
                                        <div class="field is-floating-label"><label class="label">Palpación Popliteo
                                                Izq</label>
                                            <div class="control is-small is-clearfix"><input type="text"
                                                    autocomplete="on" class="input is-small"></div>
                                        </div>
                                        <div class="field is-floating-label"><label class="label">Palpación Popliteo
                                                Der</label>
                                            <div class="control is-small is-clearfix"><input type="text"
                                                    autocomplete="on" class="input is-small"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr>
                            <div class="field">
                                <div class="field-body">
                                    <div class="field is-grouped">
                                        <div class="field"><label class="switch is-small is-rounded"><input
                                                    type="checkbox" true-value="true" value="false"><span
                                                    class="check"></span><span class="control-label">Alteración Pulso
                                                    Pedio</span></label></div>
                                    </div>
                                </div>
                            </div>
                            <div class="field"><label class="switch is-small is-rounded"><input type="checkbox"
                                        true-value="true" value="false"><span class="check"></span><span
                                        class="control-label">Tipo de Pulso pedio</span></label></div>
                            <div class="field">
                                <div class="field-body">
                                    <div class="field is-grouped">
                                        <div class="field is-floating-label"><label class="label">Palpación pedio
                                                Izq</label>
                                            <div class="control is-small is-clearfix"><input type="text"
                                                    autocomplete="on" class="input is-small"></div>
                                        </div>
                                        <div class="field is-floating-label"><label class="label">Palpación pedio
                                                Der</label>
                                            <div class="control is-small is-clearfix"><input type="text"
                                                    autocomplete="on" class="input is-small"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr>
                            <div class="field">
                                <div class="field-body">
                                    <div class="field is-grouped">
                                        <div class="field"><label class="switch is-small is-rounded"><input
                                                    type="checkbox" true-value="true" value="false"><span
                                                    class="check"></span><span class="control-label">Alteración Pulso
                                                    Tibial Posterior</span></label></div>
                                    </div>
                                </div>
                            </div>
                            <div class="field"><label class="switch is-small is-rounded"><input type="checkbox"
                                        true-value="true" value="false"><span class="check"></span><span
                                        class="control-label">Tipo de Pulso tibial_posterior</span></label></div>
                            <div class="field">
                                <div class="field-body">
                                    <div class="field is-grouped">
                                        <div class="field is-floating-label"><label class="label">Palpación Tibial Post
                                                Izq</label>
                                            <div class="control is-small is-clearfix"><input type="text"
                                                    autocomplete="on" class="input is-small"></div>
                                        </div>
                                        <div class="field is-floating-label"><label class="label">Palpación Tibial Post
                                                Der</label>
                                            <div class="control is-small is-clearfix"><input type="text"
                                                    autocomplete="on" class="input is-small"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr>
                            <div class="field">
                                <div class="field-body">
                                    <div class="field is-grouped">
                                        <div class="field"><label class="switch is-small is-rounded"><input
                                                    type="checkbox" true-value="true" value="false"><span
                                                    class="check"></span><span class="control-label">Alteración Pulso
                                                    Tibial Anterior</span></label></div>
                                    </div>
                                </div>
                            </div>
                            <div class="field"><label class="switch is-small is-rounded"><input type="checkbox"
                                        true-value="true" value="false"><span class="check"></span><span
                                        class="control-label">Tipo de Pulso tibial_anterior</span></label></div>
                            <div class="field">
                                <div class="field-body">
                                    <div class="field is-grouped">
                                        <div class="field is-floating-label"><label class="label">Palpación Tibial Ant
                                                Izq</label>
                                            <div class="control is-small is-clearfix"><input type="text"
                                                    autocomplete="on" class="input is-small"></div>
                                        </div>
                                        <div class="field is-floating-label"><label class="label">Palpación Tibial Ant
                                                Der</label>
                                            <div class="control is-small is-clearfix"><input type="text"
                                                    autocomplete="on" class="input is-small"></div>
                                        </div>
                                    </div>
                                </div>
                            </div><br>
                            <div class="field is-floating-label"><label class="label">Comentarios Generales
                                    Pulso</label>
                                <div class="control is-small is-clearfix"><input type="text" autocomplete="on"
                                        class="input is-small"></div>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <header class="card-header">
                            <p class="card-header-title"> Respiración </p>
                        </header>
                        <div class="card-content">
                            <div class="field">
                                <div class="field-body">
                                    <div class="field is-grouped">
                                        <div class="field is-floating-label"><label class="label">Frecuencia
                                                Respiratoria</label>
                                            <div class="control is-small is-clearfix"><input type="text"
                                                    autocomplete="on" class="input is-small"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="field">
                                <div class="field-body">
                                    <div class="field is-grouped">
                                        <div class="field"><span class="is-size-7"><b>Alteración Respiratoria</b></span>
                                        </div>
                                        <div class="field">
                                            <div class="field-body">
                                                <div class="field has-addons"><label
                                                        class="b-checkbox checkbox is-small"><input type="checkbox"
                                                            autocomplete="on" true-value="true" value="paradogica"><span
                                                            class="check"></span><span
                                                            class="control-label">Paradógica</span></label><label
                                                        class="b-checkbox checkbox is-small"><input type="checkbox"
                                                            autocomplete="on" true-value="true"
                                                            value="obs_via_aerea_alta"><span class="check"></span><span
                                                            class="control-label">Obstrucción Via Aerea
                                                            Alta</span></label><label
                                                        class="b-checkbox checkbox is-small"><input type="checkbox"
                                                            autocomplete="on" true-value="true"
                                                            value="obs_bran_difusa"><span class="check"></span><span
                                                            class="control-label">Obstrucción Branquial
                                                            Difusa</span></label></div>
                                            </div>
                                        </div>
                                        <div class="field is-expanded is-floating-label"><label
                                                class="label">Otros</label>
                                            <div class="control is-small is-clearfix"><input type="text"
                                                    autocomplete="on" class="input is-small"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="field">
                                <div class="field-body">
                                    <div class="field is-grouped">
                                        <div class="field"><span class="is-size-7"><b>Otros Aspectos</b></span></div>
                                        <div class="field">
                                            <div class="field-body">
                                                <div class="field has-addons"><label
                                                        class="b-checkbox checkbox is-small"><input type="checkbox"
                                                            autocomplete="on" true-value="true" value="cianosis"><span
                                                            class="check"></span><span
                                                            class="control-label">Cianosis</span></label><label
                                                        class="b-checkbox checkbox is-small"><input type="checkbox"
                                                            autocomplete="on" true-value="true" value="acroquia"><span
                                                            class="check"></span><span
                                                            class="control-label">Acroquia</span></label><label
                                                        class="b-checkbox checkbox is-small"><input type="checkbox"
                                                            autocomplete="on" true-value="true"
                                                            value="aleteo_nasal"><span class="check"></span><span
                                                            class="control-label">Aleteo Nasal</span></label></div>
                                            </div>
                                        </div>
                                        <div class="field is-expanded is-floating-label"><label
                                                class="label">Otros</label>
                                            <div class="control is-small is-clearfix"><input type="text"
                                                    autocomplete="on" class="input is-small"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="field">
                                <div class="field-body">
                                    <div class="field is-grouped">
                                        <div class="field"><span class="is-size-7"><b>Tipo de Respiración</b></span>
                                        </div>
                                        <div class="field">
                                            <div class="field-body">
                                                <div class="field has-addons"><label
                                                        class="b-checkbox checkbox is-small"><input type="checkbox"
                                                            autocomplete="on" true-value="true"
                                                            value="hiperventilacion"><span class="check"></span><span
                                                            class="control-label">Hiperventilación</span></label><label
                                                        class="b-checkbox checkbox is-small"><input type="checkbox"
                                                            autocomplete="on" true-value="true" value="kussmaul"><span
                                                            class="check"></span><span
                                                            class="control-label">Kussmaul</span></label><label
                                                        class="b-checkbox checkbox is-small"><input type="checkbox"
                                                            autocomplete="on" true-value="true" value="cheyne"><span
                                                            class="check"></span><span
                                                            class="control-label">Cheyne</span></label><label
                                                        class="b-checkbox checkbox is-small"><input type="checkbox"
                                                            autocomplete="on" true-value="true" value="biot"><span
                                                            class="check"></span><span
                                                            class="control-label">Biot</span></label></div>
                                            </div>
                                        </div>
                                        <div class="field is-expanded is-floating-label"><label
                                                class="label">Otros</label>
                                            <div class="control is-small is-clearfix"><input type="text"
                                                    autocomplete="on" class="input is-small"></div>
                                        </div>
                                    </div>
                                </div>
                            </div><br>
                            <div class="field is-floating-label"><label class="label">Comentarios Generales
                                    Respiración</label>
                                <div class="control is-small is-clearfix"><input type="text" autocomplete="on"
                                        class="input is-small"></div>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <header class="card-header">
                            <p class="card-header-title"> Temperatura </p>
                        </header>
                        <div class="card-content">
                            <div class="field">
                                <div class="field-body">
                                    <div class="field is-grouped">
                                        <div class="field is-expanded is-floating-label"><label class="label">Boca
                                                C°</label>
                                            <div class="control is-small is-clearfix"><input type="text"
                                                    autocomplete="on" class="input is-small"></div>
                                        </div>
                                        <div class="field is-expanded is-floating-label"><label class="label">Axila
                                                C°</label>
                                            <div class="control is-small is-clearfix"><input type="text"
                                                    autocomplete="on" class="input is-small"></div>
                                        </div>
                                        <div class="field is-expanded is-floating-label"><label class="label">Ingle
                                                C°</label>
                                            <div class="control is-small is-clearfix"><input type="text"
                                                    autocomplete="on" class="input is-small"></div>
                                        </div>
                                        <div class="field is-expanded is-floating-label"><label class="label">Recto
                                                C°</label>
                                            <div class="control is-small is-clearfix"><input type="text"
                                                    autocomplete="on" class="input is-small"></div>
                                        </div>
                                    </div>
                                </div>
                            </div><br>
                            <div class="field is-floating-label"><label class="label">Comentarios Temperatura</label>
                                <div class="control is-small is-clearfix"><input type="text" autocomplete="on"
                                        class="input is-small"></div>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <header class="card-header">
                            <p class="card-header-title"> Conciencia </p>
                        </header>
                        <div class="card-content">
                            <div class="mb-3">
                                <div class="field">
                                    <div class="field-body">
                                        <div class="field is-grouped">
                                            <div class="field"><label class="switch is-small is-rounded"><input
                                                        type="checkbox" true-value="1" false-value="0"
                                                        value="false"><span class="check"></span><span
                                                        class="control-label">Alteración Orientación</span></label>
                                            </div>
                                            <div class="field" style="display: none;">
                                                <div class="field-body">
                                                    <div class="field has-addons"><label
                                                            class="b-checkbox checkbox is-capitalized is-small"><input
                                                                type="checkbox" autocomplete="on" true-value="true"
                                                                value="lucidez"><span class="check"></span><span
                                                                class="control-label">lucidez</span></label><label
                                                            class="b-checkbox checkbox is-capitalized is-small"><input
                                                                type="checkbox" autocomplete="on" true-value="true"
                                                                value="obnulacion"><span class="check"></span><span
                                                                class="control-label">obnulacion</span></label><label
                                                            class="b-checkbox checkbox is-capitalized is-small"><input
                                                                type="checkbox" autocomplete="on" true-value="true"
                                                                value="sopor"><span class="check"></span><span
                                                                class="control-label">sopor</span></label><label
                                                            class="b-checkbox checkbox is-capitalized is-small"><input
                                                                type="checkbox" autocomplete="on" true-value="true"
                                                                value="coma"><span class="check"></span><span
                                                                class="control-label">coma</span></label><label
                                                            class="b-checkbox checkbox is-capitalized is-small"><input
                                                                type="checkbox" autocomplete="on" true-value="true"
                                                                value="letargia"><span class="check"></span><span
                                                                class="control-label">letargia</span></label><label
                                                            class="b-checkbox checkbox is-capitalized is-small"><input
                                                                type="checkbox" autocomplete="on" true-value="true"
                                                                value="bradipsiquia"><span class="check"></span><span
                                                                class="control-label">bradipsiquia</span></label></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="field" style="display: none;">
                                    <div class="field-body">
                                        <div class="field is-grouped">
                                            <div class="field is-floating-label"><label class="label">Otro</label>
                                                <div class="control is-small is-clearfix"><input type="text"
                                                        autocomplete="on" class="input is-small"></div>
                                            </div>
                                            <div class="field is-expanded is-floating-label"><label
                                                    class="label">Comentario</label>
                                                <div class="control is-small is-clearfix"><input type="text"
                                                        autocomplete="on" class="input is-small"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-3">
                                <div class="field">
                                    <div class="field-body">
                                        <div class="field is-grouped">
                                            <div class="field"><label class="switch is-small is-rounded"><input
                                                        type="checkbox" true-value="1" false-value="0"
                                                        value="false"><span class="check"></span><span
                                                        class="control-label">Alteración Lenguaje</span></label></div>
                                            <div class="field" style="display: none;">
                                                <div class="field-body">
                                                    <div class="field has-addons"><label
                                                            class="b-checkbox checkbox is-capitalized is-small"><input
                                                                type="checkbox" autocomplete="on" true-value="true"
                                                                value="afasia_global"><span class="check"></span><span
                                                                class="control-label">afasia_global</span></label><label
                                                            class="b-checkbox checkbox is-capitalized is-small"><input
                                                                type="checkbox" autocomplete="on" true-value="true"
                                                                value="afasia_motora"><span class="check"></span><span
                                                                class="control-label">afasia_motora</span></label><label
                                                            class="b-checkbox checkbox is-capitalized is-small"><input
                                                                type="checkbox" autocomplete="on" true-value="true"
                                                                value="afasia_sensorial"><span
                                                                class="check"></span><span
                                                                class="control-label">afasia_sensorial</span></label><label
                                                            class="b-checkbox checkbox is-capitalized is-small"><input
                                                                type="checkbox" autocomplete="on" true-value="true"
                                                                value="disfonia"><span class="check"></span><span
                                                                class="control-label">disfonia</span></label><label
                                                            class="b-checkbox checkbox is-capitalized is-small"><input
                                                                type="checkbox" autocomplete="on" true-value="true"
                                                                value="alexia"><span class="check"></span><span
                                                                class="control-label">alexia</span></label><label
                                                            class="b-checkbox checkbox is-capitalized is-small"><input
                                                                type="checkbox" autocomplete="on" true-value="true"
                                                                value="agrafia"><span class="check"></span><span
                                                                class="control-label">agrafia</span></label><label
                                                            class="b-checkbox checkbox is-capitalized is-small"><input
                                                                type="checkbox" autocomplete="on" true-value="true"
                                                                value="bradilalia"><span class="check"></span><span
                                                                class="control-label">bradilalia</span></label><label
                                                            class="b-checkbox checkbox is-capitalized is-small"><input
                                                                type="checkbox" autocomplete="on" true-value="true"
                                                                value="taquilalia"><span class="check"></span><span
                                                                class="control-label">taquilalia</span></label></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="field" style="display: none;">
                                    <div class="field-body">
                                        <div class="field is-grouped">
                                            <div class="field is-floating-label"><label class="label">Otro</label>
                                                <div class="control is-small is-clearfix"><input type="text"
                                                        autocomplete="on" class="input is-small"></div>
                                            </div>
                                            <div class="field is-expanded is-floating-label"><label
                                                    class="label">Comentario</label>
                                                <div class="control is-small is-clearfix"><input type="text"
                                                        autocomplete="on" class="input is-small"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-3">
                                <div class="field"><label class="switch is-small is-rounded"><input type="checkbox"
                                            true-value="1" false-value="0" value="false"><span
                                            class="check"></span><span class="control-label">Memoria
                                            Remota</span></label></div>
                                <div class="field" style="display: none;">
                                    <div class="field-body">
                                        <div class="field is-grouped">
                                            <div class="field is-floating-label"><label class="label">Otro</label>
                                                <div class="control is-small is-clearfix"><input type="text"
                                                        autocomplete="on" class="input is-small"></div>
                                            </div>
                                            <div class="field is-expanded is-floating-label"><label
                                                    class="label">Comentario</label>
                                                <div class="control is-small is-clearfix"><input type="text"
                                                        autocomplete="on" class="input is-small"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-3">
                                <div class="field"><label class="switch is-small is-rounded"><input type="checkbox"
                                            true-value="1" false-value="0" value="false"><span
                                            class="check"></span><span class="control-label">Memoria
                                            Reciente</span></label></div>
                                <div class="field" style="display: none;">
                                    <div class="field-body">
                                        <div class="field is-grouped">
                                            <div class="field is-floating-label"><label class="label">Otro</label>
                                                <div class="control is-small is-clearfix"><input type="text"
                                                        autocomplete="on" class="input is-small"></div>
                                            </div>
                                            <div class="field is-expanded is-floating-label"><label
                                                    class="label">Comentario</label>
                                                <div class="control is-small is-clearfix"><input type="text"
                                                        autocomplete="on" class="input is-small"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-3">
                                <div class="field"><label class="switch is-small is-rounded"><input type="checkbox"
                                            true-value="1" false-value="0" value="false"><span
                                            class="check"></span><span class="control-label">Memoria
                                            Inmediata</span></label></div>
                                <div class="field" style="display: none;">
                                    <div class="field-body">
                                        <div class="field is-grouped">
                                            <div class="field is-floating-label"><label class="label">Otro</label>
                                                <div class="control is-small is-clearfix"><input type="text"
                                                        autocomplete="on" class="input is-small"></div>
                                            </div>
                                            <div class="field is-expanded is-floating-label"><label
                                                    class="label">Comentario</label>
                                                <div class="control is-small is-clearfix"><input type="text"
                                                        autocomplete="on" class="input is-small"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-3">
                                <div class="field"><label class="switch is-small is-rounded"><input type="checkbox"
                                            true-value="1" false-value="0" value="false"><span
                                            class="check"></span><span class="control-label">Cognición
                                            Superior</span></label></div>
                                <div class="field" style="display: none;">
                                    <div class="field-body">
                                        <div class="field is-grouped">
                                            <div class="field is-floating-label"><label class="label">Otro</label>
                                                <div class="control is-small is-clearfix"><input type="text"
                                                        autocomplete="on" class="input is-small"></div>
                                            </div>
                                            <div class="field is-expanded is-floating-label"><label
                                                    class="label">Comentario</label>
                                                <div class="control is-small is-clearfix"><input type="text"
                                                        autocomplete="on" class="input is-small"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-3">
                                <div class="field">
                                    <div class="field-body">
                                        <div class="field is-grouped">
                                            <div class="field"><label class="switch is-small is-rounded"><input
                                                        type="checkbox" true-value="1" false-value="0"
                                                        value="false"><span class="check"></span><span
                                                        class="control-label">Pensamiento Abstracto</span></label></div>
                                            <div class="field" style="display: none;">
                                                <div class="field-body">
                                                    <div class="field has-addons"><label
                                                            class="b-checkbox checkbox is-capitalized is-small"><input
                                                                type="checkbox" autocomplete="on" true-value="true"
                                                                value="semejanzas"><span class="check"></span><span
                                                                class="control-label">semejanzas</span></label><label
                                                            class="b-checkbox checkbox is-capitalized is-small"><input
                                                                type="checkbox" autocomplete="on" true-value="true"
                                                                value="diferencias"><span class="check"></span><span
                                                                class="control-label">diferencias</span></label><label
                                                            class="b-checkbox checkbox is-capitalized is-small"><input
                                                                type="checkbox" autocomplete="on" true-value="true"
                                                                value="asociacion"><span class="check"></span><span
                                                                class="control-label">asociacion</span></label></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="field" style="display: none;">
                                    <div class="field-body">
                                        <div class="field is-grouped">
                                            <div class="field is-floating-label"><label class="label">Otro</label>
                                                <div class="control is-small is-clearfix"><input type="text"
                                                        autocomplete="on" class="input is-small"></div>
                                            </div>
                                            <div class="field is-expanded is-floating-label"><label
                                                    class="label">Comentario</label>
                                                <div class="control is-small is-clearfix"><input type="text"
                                                        autocomplete="on" class="input is-small"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-3">
                                <div class="field">
                                    <div class="field-body">
                                        <div class="field is-grouped">
                                            <div class="field"><label class="switch is-small is-rounded"><input
                                                        type="checkbox" true-value="1" false-value="0"
                                                        value="false"><span class="check"></span><span
                                                        class="control-label">Percepción</span></label></div>
                                            <div class="field" style="display: none;">
                                                <div class="field-body">
                                                    <div class="field has-addons"><label
                                                            class="b-checkbox checkbox is-capitalized is-small"><input
                                                                type="checkbox" autocomplete="on" true-value="true"
                                                                value="alterado"><span class="check"></span><span
                                                                class="control-label">alterado</span></label><label
                                                            class="b-checkbox checkbox is-capitalized is-small"><input
                                                                type="checkbox" autocomplete="on" true-value="true"
                                                                value="confusion"><span class="check"></span><span
                                                                class="control-label">confusion</span></label><label
                                                            class="b-checkbox checkbox is-capitalized is-small"><input
                                                                type="checkbox" autocomplete="on" true-value="true"
                                                                value="delirio"><span class="check"></span><span
                                                                class="control-label">delirio</span></label><label
                                                            class="b-checkbox checkbox is-capitalized is-small"><input
                                                                type="checkbox" autocomplete="on" true-value="true"
                                                                value="alucinaciones"><span class="check"></span><span
                                                                class="control-label">alucinaciones</span></label><label
                                                            class="b-checkbox checkbox is-capitalized is-small"><input
                                                                type="checkbox" autocomplete="on" true-value="true"
                                                                value="psicosis"><span class="check"></span><span
                                                                class="control-label">psicosis</span></label></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="field" style="display: none;">
                                    <div class="field-body">
                                        <div class="field is-grouped">
                                            <div class="field is-floating-label"><label class="label">Otro</label>
                                                <div class="control is-small is-clearfix"><input type="text"
                                                        autocomplete="on" class="input is-small"></div>
                                            </div>
                                            <div class="field is-expanded is-floating-label"><label
                                                    class="label">Comentario</label>
                                                <div class="control is-small is-clearfix"><input type="text"
                                                        autocomplete="on" class="input is-small"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-3">
                                <div class="field">
                                    <div class="field-body">
                                        <div class="field is-grouped">
                                            <div class="field"><label class="switch is-small is-rounded"><input
                                                        type="checkbox" true-value="1" false-value="0"
                                                        value="false"><span class="check"></span><span
                                                        class="control-label">Operaciones y Cálculo</span></label></div>
                                            <div class="field" style="display: none;">
                                                <div class="field-body">
                                                    <div class="field has-addons"><label
                                                            class="b-checkbox checkbox is-capitalized is-small"><input
                                                                type="checkbox" autocomplete="on" true-value="true"
                                                                value="operaciones_simples"><span
                                                                class="check"></span><span
                                                                class="control-label">operaciones_simples</span></label><label
                                                            class="b-checkbox checkbox is-capitalized is-small"><input
                                                                type="checkbox" autocomplete="on" true-value="true"
                                                                value="inversion_series"><span
                                                                class="check"></span><span
                                                                class="control-label">inversion_series</span></label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="field" style="display: none;">
                                    <div class="field-body">
                                        <div class="field is-grouped">
                                            <div class="field is-floating-label"><label class="label">Otro</label>
                                                <div class="control is-small is-clearfix"><input type="text"
                                                        autocomplete="on" class="input is-small"></div>
                                            </div>
                                            <div class="field is-expanded is-floating-label"><label
                                                    class="label">Comentario</label>
                                                <div class="control is-small is-clearfix"><input type="text"
                                                        autocomplete="on" class="input is-small"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-3">
                                <div class="field">
                                    <div class="field-body">
                                        <div class="field is-grouped">
                                            <div class="field"><label class="switch is-small is-rounded"><input
                                                        type="checkbox" true-value="1" false-value="0"
                                                        value="false"><span class="check"></span><span
                                                        class="control-label">Trastorno de Personalidad</span></label>
                                            </div>
                                            <div class="field" style="display: none;">
                                                <div class="field-body">
                                                    <div class="field has-addons"><label
                                                            class="b-checkbox checkbox is-capitalized is-small"><input
                                                                type="checkbox" autocomplete="on" true-value="true"
                                                                value="demencia"><span class="check"></span><span
                                                                class="control-label">demencia</span></label><label
                                                            class="b-checkbox checkbox is-capitalized is-small"><input
                                                                type="checkbox" autocomplete="on" true-value="true"
                                                                value="delirio"><span class="check"></span><span
                                                                class="control-label">delirio</span></label><label
                                                            class="b-checkbox checkbox is-capitalized is-small"><input
                                                                type="checkbox" autocomplete="on" true-value="true"
                                                                value="depresion"><span class="check"></span><span
                                                                class="control-label">depresion</span></label><label
                                                            class="b-checkbox checkbox is-capitalized is-small"><input
                                                                type="checkbox" autocomplete="on" true-value="true"
                                                                value="obnulacion"><span class="check"></span><span
                                                                class="control-label">obnulacion</span></label><label
                                                            class="b-checkbox checkbox is-capitalized is-small"><input
                                                                type="checkbox" autocomplete="on" true-value="true"
                                                                value="ansiedad"><span class="check"></span><span
                                                                class="control-label">ansiedad</span></label><label
                                                            class="b-checkbox checkbox is-capitalized is-small"><input
                                                                type="checkbox" autocomplete="on" true-value="true"
                                                                value="hipomaniaco"><span class="check"></span><span
                                                                class="control-label">hipomaniaco</span></label><label
                                                            class="b-checkbox checkbox is-capitalized is-small"><input
                                                                type="checkbox" autocomplete="on" true-value="true"
                                                                value="esquizofrenia"><span class="check"></span><span
                                                                class="control-label">esquizofrenia</span></label></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="field" style="display: none;">
                                    <div class="field-body">
                                        <div class="field is-grouped">
                                            <div class="field is-floating-label"><label class="label">Otro</label>
                                                <div class="control is-small is-clearfix"><input type="text"
                                                        autocomplete="on" class="input is-small"></div>
                                            </div>
                                            <div class="field is-expanded is-floating-label"><label
                                                    class="label">Comentario</label>
                                                <div class="control is-small is-clearfix"><input type="text"
                                                        autocomplete="on" class="input is-small"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="field is-floating-label"><label class="label">Comentarios Generales
                                    Conciencia</label>
                                <div class="control is-small is-clearfix"><input type="text" autocomplete="on"
                                        class="input is-small"></div>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <header class="card-header">
                            <p class="card-header-title"> Tensión Arterial </p>
                        </header>
                        <div class="card-content">
                            <div class="field">
                                <div class="field-body">
                                    <div class="field is-grouped">
                                        <div class="field is-floating-label"><label class="label">Tensión
                                                Sistólica</label>
                                            <div class="control is-small is-clearfix"><input type="text"
                                                    autocomplete="on" class="input is-small"></div>
                                        </div>
                                        <div class="field is-floating-label"><label class="label">Tensión
                                                Diastólica</label>
                                            <div class="control is-small is-clearfix"><input type="text"
                                                    autocomplete="on" class="input is-small"></div>
                                        </div>
                                        <div class="field is-expanded is-floating-label"><label
                                                class="label">Comentarios Tensión Arterial</label>
                                            <div class="control is-small is-clearfix"><input type="text"
                                                    autocomplete="on" class="input is-small"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="field">
                        <p class="control has-text-centered"><button type="submit"
                                class="button is-primary"><span>Guardar Evaluación</span></button></p>
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
  name: 'EditarConsulta',
  components: {
    HeroBar,
    TabNav,
    Tab
  },
  data () {
    return {
      selected: 'Motivos Generales',
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
