(this["webpackJsonpcrayons-react-example"]=this["webpackJsonpcrayons-react-example"]||[]).push([[122],{311:function(e,o,a){"use strict";a.r(o),a.d(o,"datatable",(function(){return c})),a.d(o,"datepicker",(function(){return i})),a.d(o,"dropdown",(function(){return r})),a.d(o,"fileUploader",(function(){return t})),a.d(o,"filters",(function(){return u})),a.d(o,"form",(function(){return n})),a.d(o,"formBuilder",(function(){return p})),a.d(o,"modal",(function(){return s})),a.d(o,"pagination",(function(){return l})),a.d(o,"platformTable",(function(){return m})),a.d(o,"search",(function(){return d})),a.d(o,"searchDropdown",(function(){return f}));var i={cancel:"Cancelar",update:"Atualizar",to:"at\xe9"},r={add:"Adicionar",cancel:"Cancelar"},t={text:"Carregue um ficheiro",description:"ou arraste e solte aqui",acceptError:"Formato de ficheiro n\xe3o aceite",maxFileSizeError:"Tamanho m\xe1ximo de ficheiro ultrapassado",maxFilesLimitError:"Limite m\xe1ximo de ficheiros ultrapassado",fileUploadError:"Erro ao carregar o ficheiro",uploading:"A carregar",selectedFiles:"Ficheiros selecionados",remove:"remover"},s={cancel:"Cancelar",ok:"OK"},d={search:"Pesquisar",noItemsFound:"N\xe3o foram encontrados itens",noDataAvailable:"N\xe3o h\xe1 dados dispon\xedveis"},n={required:"{{field}} \xe9 obrigat\xf3rio",invalidUrl:"Insira um URL v\xe1lido",invalidEmail:"Insira um e-mail v\xe1lido",invalidNumber:"Insira um n\xfamero v\xe1lido"},l={buttonGroupLabel:"Controlos de pagina\xe7\xe3o",previousButtonLabel:"Anterior",nextButtonLabel:"Pr\xf3ximo",content:"<span class='record'>{{start}}</span> a <span class='record'>{{end}}</span> de {{total}}"},c={chooseColumns:"Escolher colunas",actions:"A\xe7\xf5es",hide:"Ocultar",show:"Mostrar"},m={delete:"Eliminar",sortby:"Ordenar por",orderby:"Ordenar por"},p={fieldRequired:"Obrigat\xf3rio ao enviar o formul\xe1rio",fieldRequiredTag:"Obrigat\xf3rio",fieldUnique:"Aceitar valores \xfanicos",fieldUniqueHoverText:"Se definido, o sistema n\xe3o deixar\xe1 que dois registos tenham o mesmo valor no campo. Note que este comportamento n\xe3o pode ser atualizado depois de o campo ser criado.",fieldUniqueTag:"\xdanico",fieldFilter:"Apresentar nos filtros",fieldFilterHoverText:"Se definido, poder\xe1 filtrar a sua vista de lista de registos neste campo. Note que este comportamento n\xe3o pode ser atualizado depois de o campo ser criado.",fieldFilterTag:"Filtr\xe1vel",fieldTypeRelationship:"Rela\xe7\xe3o de pesquisa",fieldTypeRelationshipDesc:"Criar rela\xe7\xf5es entre objetos atrav\xe9s de um campo de pesquisa",fieldTypeRelationshipDescHoverText:"Este campo permitir\xe1 aos utilizadores clicar num \xedcone de pesquisa para selecionar um valor de uma lista. O objeto de destino \xe9 a origem dos valores da lista.",fieldTypeText:"Texto",fieldTypeParagraph:"Par\xe1grafo",fieldTypeNumber:"N\xfamero",fieldTypeDecimal:"Decimal",fieldTypeDate:"Data",fieldTypeDropdown:"Menu suspenso",fieldTypeCheckbox:"Caixa de verifica\xe7\xe3o",fieldTypeMultiselect:"Sele\xe7\xe3o m\xfaltipla",lookupUniqueTag:"\xdanico",primaryFieldTag:"Campo principal",primaryFieldHeader:"Campo principal",primaryFieldNameHint:"Este \xe9 o campo principal do objeto e n\xe3o pode ser eliminado. Dever\xe1 ser uma representa\xe7\xe3o \xfanica de cada registo e aparecer\xe1 nas pesquisas e resultados de pesquisa.",deleteFieldTitle:"Tem a certeza de que deseja eliminar o campo",deleteFieldMessage:"Este campo ser\xe1 eliminado definitivamente e todos os dados associados ser\xe3o perdidos. Deseja continuar?",deleteFieldSubmit:"Eliminar",searchFields:"Pesquisar campos",customizeWidget:"Personalizar widget",addChoices:"Adicionar op\xe7\xf5es",addChoice:"Adicionar op\xe7\xe3o",choicePlaceholderSuffix:"Op\xe7\xe3o",headerFieldTypes:"Tipos de campo",headerFields:"Campos",fieldTypesDragDrop:"Arraste e solte a partir daqui",behaviour:"Comportamento",fieldLabel:"Etiqueta do campo",fieldLabelPlaceholder:"Insira a etiqueta de campo",addFieldBtn:"Adicionar campo",saveFieldBtn:"Guardar",cancelFieldBtn:"Cancelar",disabledFilterCheck:"Os campos \xfanicos estar\xe3o sempre dispon\xedveis para filtrar registos na vista de lista",lookupSourceObject:"Objeto de origem",lookupRelationshipPlaceholder:"Selecionar rela\xe7\xe3o",lookupRelationshipLabel:"Tipo de rela\xe7\xe3o",lookupTargetPlaceholder:"Selecionar objeto de destino",lookupTargetLabel:"Objeto de destino",dropdownChoiceDeleteMessage:"A elimina\xe7\xe3o de uma op\xe7\xe3o afetar\xe1 os tickets, a automa\xe7\xe3o e os relat\xf3rios relacionados.",relationshipManyToOne:"Muitos para um",relationshipManyToOneDesc:"Associe muitos registos do objeto de origem a um registo do objeto de destino, isto \xe9, um cliente pode criar muitos tickets.",relationshipOneToOne:"Um para um",relationshipOneToOneDesc:"Associe um registo do objeto de origem a um s\xf3 registo do objeto de destino, isto \xe9, um indiv\xedduo pode ter apenas um passaporte.",customizeWidgetModalHeader:"Personalizar widget",customizeWidgetModalHint:"Selecione at\xe9 5 campos a apresentar no widget e nos resultados da pesquisa",customizeWidgetModalSaveBtn:"Guardar",customizeWidgetModalCancelBtn:"Cancelar",noSearchItemsFound:"N\xe3o foram encontrados campos correspondentes!",errors:{emptyFieldName:"A etiqueta de campo \xe9 obrigat\xf3ria!",emptyRelationshipType:"O tipo de rela\xe7\xe3o \xe9 obrigat\xf3rio!",emptyTargetObject:"O objeto de destino \xe9 obrigat\xf3rio!",emptyChoice:"O texto de op\xe7\xe3o \xe9 obrigat\xf3rio!",duplicate:"A op\xe7\xe3o suspensa j\xe1 existe!",minimum:"Insira um m\xednimo de uma op\xe7\xe3o!",formErrors:"O formul\xe1rio cont\xe9m erros!",fieldNameExists:"J\xe1 existe um campo com a mesma etiqueta!"},maximumLimits:{filterable:"\xc9 poss\xedvel usar um m\xe1ximo de 25 campos para filtrar registos na vista de lista.",unique:"\xc9 poss\xedvel marcar como \xfanicos um m\xe1ximo de 5 campos.",fields:"Atingiu o limite m\xe1ximo de 100 campos. Elimine um campo para criar um novo.",lookups:"Atingiu o limite m\xe1ximo de 5 campos de pesquisa. Elimine um campo de pesquisa para criar um novo."}},u={title:"Filtro",addFilter:"Adicionar filtro",noFilter:"Ainda n\xe3o adicionou nenhum filtro",validation:{required:"Campo obrigat\xf3rio",minMax:"Deve ser maior que {{fromValue}}"},placeholder:{startRange:"Intervalo de in\xedcio",endRange:"Intervalo de fim",and:"e"}},f={placeholder:{search:"Escreva para pesquisar"}},g={datepicker:i,dropdown:r,fileUploader:t,modal:s,search:d,form:n,pagination:l,datatable:c,platformTable:m,formBuilder:p,filters:u,searchDropdown:f};o.default=g}}]);
//# sourceMappingURL=122.ffa0d2c6.chunk.js.map