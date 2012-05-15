$(document).ready(function(){

'use strict';

var quiz = 
    [
      {
        question: 'Hva er WAI-ARIA forkortelse for?',
        answers: 
        [   
            'WWW Accessibility Information - Advanced Rich Internet Accessibility',
            'WWW Accessibility Information - Accessible Reader Internet Applications',
            'Web Accessibility Initiative - Accessible Rich Internet Applications',
            'Web Accessibility Initiative - Advanced Reader Interactive Applications'
        ],
        correct: 2,
        explanation: 'WAI står for <b>Web Accessibility Initiative</b> og ARIA står for <b>Accessible Rich Internet Applications</b>. WAI er en samling protokoller for tilgjengelighet på nett, og ARIA er deres tiltak for å øke tilgjengelighet rundt rike applikasjoner.'
      },
      {
        question: 'Hva er problemet med rike webapplikasjoner?',
        answers: 
        [
          'De er sjelden tilgjengelige med tastatur, og kommuniserer dårlig med skjermlesere', 
          'De ødelegger HTML strukturen i en nettside', 
          'De er meningsløse for folk som avhenger av skjermlesere og bør unngås',
          'De skal erstattes i HTML5 med en helt ny syntaks, og er dermed døende teknologi'
        ],
        correct: 0,
        explanation: 'Rike webapplikasjoner finner man på et stort antall nettsider og er overhodet ikke noe døende teknologi men øker raskt. Ofte kan man finne viktig informasjon gjennom en widget, og da er det nødvendig å sørge for at alle får tilgang til samme informasjon.'
      },
      {
        question: 'Hva må man huske på før man begynner å bruke aria?',
        answers: 
        [   
          'Man må definere <!DOCTYPE html aria=valid>', 
          'Man må skrive aria-foran alle elementer i koden', 
          'Man trenger ikke huske på noen ting ettersom aria ikke forstyrrer den øvrige koden',
          'Man må plassere alt i egne <div>tags'
        ],
        correct: 2,
        explanation: 'Når du bruker aria trenger du ikke tenke på å endre den øvrige koden, men bare legge til aria-funksjonalitet i tillegg. Oppdager du forøvrig at det blir litt smør-på-flesk og at problemet kan løses med ren HTML så kan du fint hoppe over aria-tagen.'
      },
      {
        question: 'Hva skjer hvis en aria-tilpasset nettside leses i nettlesere som ikke støtter standarden?',
        answers: 
        [   
          'Nettsiden vil bli uleselig', 
          'Man kan fortsatt lese siden, men kun hvis aria er definert i starten av dokumentet', 
          'Ingenting, de fungerer som før selv om nettsiden bruker aria-funksjonalitet',
          'Nettleseren må oppdateres med en aria-plugin'
        ],
        correct: 2,
        explanation: 'Det er ingen plugins eller annet som trengs, nettleseren formidler alt videre til assisterende teknologi i bakgrunnen, og nettsiden vil fremstå likt som før.'
      },
      {
        question: 'Hvordan ser en vanlig aria-attributt ut i koden?',
        answers: 
        [   
          'a.pressed="true"', 
          'aria.pressed {true}',
          '<pressed=true/>',
          'aria-pressed="true"'
        ],
        correct: 3,
        explanation: 'Aria skrives likt som andre HTML-attributter men med aria- foran, og verdien inni fnutter.'
      },
      {
        question: 'Hva er forskjellen på en role og en attributt?',
        answers: 
        [   
          'Attributtet beskriver status på en role',
          'Attributtet forteller hvilken status objektet har mens role beskriver hva attributtet kan gjøre',
          'Role beskriver hva objektet er mens attributt gir objektet en status',
          'Det er to forskjellige navn på akkurat det samme'
        ],
        correct: 2,
        explanation: 'Role og attributt er ikke det samme. Hvis man definerer en role som checkbox vil attributten aria=checked fortelle om checkboxen er huket av ved å endre status fra false til true.'
      },
      {
        question: 'Aria er inndelt i hvilke tre attributter?',
        answers: 
        [   
          'Roles, states og properties',
          'States, values og operations',
          'Properties, roles og tables',
          'Roles, states og actions'
        ],
        correct: 0,
        explanation: 'Aria består av tre deler: roles, states og properties. En role har en property som har en state.'
      },
      {
        question: 'Aria-atomic brukes for varsling om ting som endrer seg. Hvordan brukes denne statusen?',
        answers: 
        [   
          'å lese ut alt som nå står på skjermen. Har status polite eller assertive',
          'å opplyse om kun det som er endret siden sist. Aktiveres ved true/false.',
          'å gi beskjed om at noe er endret men at du kan velge å høre det eller ikke',
          'å gi informasjon om det siste nye på slalåm-utstyr'
        ],
        correct: 1,
        explanation: 'I blant kan det være fint å slippe å høre alt som du allerede vet en gang til, men ved aria-atomic kan du velge å få lest ut kun de aktuelle endringene som har skjedd siden sist du fikk en oppdatering.'
      },
      {
        question: 'Hvilken "aria-checked" status får man hvis en knapp ikke støtter avhuking?',
        answers: 
        [   
          'true',
          'false',
          'undefined',
          'mixed'
        ],
        correct: 2,
        explanation: 'Hvis ting ikke fungerer slik du hadde tenkt vil ikke nettleseren forstå hvilken status den skal gi, og serverer derfor den kjedelige "undefined" beskjeden.'
      },
      {
        question: 'Hva skal man med live-regioner?',
        answers: 
        [   
          'Opplyse om at man er inni et nettsted som kan endres uten forvarsel',
          'Tillate at elementer i dokumentet blir annonsert uten å flytte fokus vekk fra det man holder på med',
          'Gi beskjed om hvilken del av nettsiden man befinner seg på',
          'For å kunne streame radio direkte gjennom en skjermleser'
        ],
        correct: 1,
        explanation: 'Du kan få god bruk for live-regioner hver gang du for eksempel skriver et innlegg på facebook og en god venn logger seg inn på chatten. Da vil du gjerne ikke at markøren skal flytte seg til chatten og ødelegge det du holder på med, men bare få en vennlig opplysning om at "Statsministeren har logget seg på".'
      },
      {
        question: 'Hva brukes landemerker til?',
        answers: 
        [   
          'For å gruppere viktige elementer på en side',
          'For å lese opp koordinater når man er inne på en kart-side',
          'For å sette et merke der man står så man alltid kan vende tilbake til dette punktet',
          'For å enkelt å lagre en URL i favoritter'
        ],
        correct: 0,
        explanation: 'En nettside består av elementer som er lett å skille ut visuelt, slik som hovedmeny, listemeny, bunntekst. Det som vanligvis defineres visuelt med rammer og punkter kan vi tydeliggjøre for skjermlesere ved hjelp av aria-landemerker.'
      },
      {
        question: 'Hvilken av disse landemerkene finnes ikke i aria?',
        answers: 
        [   
          'main',
          'textbox',
          'banner',
          'navigation'
        ],
        correct: 1,
        explanation: 'Til hovedinnholdet på en side brukes main. For ekstra info som vises i en liten rute kan man for eksempel bruke complementary.'
      },
      {
        question: 'Tabindex brukes til hva?',
        answers: 
        [   
          'å bruke tabulatortasten til å hoppe til popupvinduer',
          'å bruke tabulatortasten til å hoppe i en spesiell rekkefølge du definerer selv',
          'å deaktivere tabulatortasten og navigere ved hjelp av mus',
          'å kunne liste ut alle undermenyer på en side'
        ],
        correct: 1,
        explanation: 'Nettsider har elementer som kan klikkes på, og disse blir automatisk fokuserbare ved hjelp av tabulatortasten. Men det kan være kjedelig å måtte bruke tabulator gjennom en hel liste med lenker hvis man vil ha rask tilgang til et spesielt viktig menyvalg. Med tabindex kan du definere rekkefølgen selv.'
      },
      {
        question: 'Hva skjer hvis du setter tabindex til en minusverdi?',
        answers: 
        [   
          'Elementet vil bli usynlig for alle',
          'Du må trykke tab+shift for å hoppe til elementet',
          'Elementet kan kun tabbes til i den rekkefølgen den står i html-koden',
          'Elementet kan få fokus men må aktiveres med javascript for å kunne tabbes til'
        ],
        correct: 3,
        explanation: 'Tabindex -1 gir muligheten til å hoppe over ting som kanskje er fokuserbare men som kan være forstyrrende. Kasnkje du kan gjøre brukerne dine en tjeneste og sette tabindex -1 på en reklame som kommer opp midt i teksten?'
      },
      {
        question: 'Hvilken av disse er ikke en "aria-live"status?',
        answers: 
        [   
          'on',
          'off',
          'polite',
          'assertive'
        ],
        correct: 0,
        explanation: 'Har du først tatt i bruk aria-live vil den automatisk være på, derfor trengs ingen on-status.'
      },
      {
        question: 'Hva skal man med widget-role?',
        answers: 
        [   
          'Gi bakgrunnsinformasjon om en widget, hvem som har utviklet den og copyright-informasjon',
          'Gi muligheten til å kommunisere med widgeten gjennom et eksternt program',
          'Gjør skjemleseren i stand til å ignorere widgeten',
          'Gi skjermleseren beskjed om at noe uventet kan skje'
        ],
        correct: 3,
        explanation: 'En widget-role forteller skjermleseren at de er i ferd med å bevege seg inn i en widget og at denne vil kreve råderett over mange av funksjonene skjermleseren normalt håndterer.'
      },
      {
        question: 'Hvilken av disse er ikke en widget-role?',
        answers: 
        [   
          'Button',
          'Textfield',
          'Branch',
          'Tree'
        ],
        correct: 2,
        explanation: 'Branch er ingen widget-role. Høres ut som et undervalg av tree, men finnes ikke noe som branch. Kanskje i fremtiden.'
      },
      {
        question: 'Hva er det langsiktige målet til W3C i forbindelse med aria-standarden?',
        answers:
        [
          'At alle nettsider kun skal bruke aria i fremtiden',
          'At alle kodespråk skal utvikles på en måte som over tid gjør aria overflødig',
          'At aria skal være lovpålagt å bruke',
          'At man skal begrense utviklingen av rike applikasjoner'
        ],
        correct: 1,
        explanation: 'W3C har som mål å standardisere internettet slik at du slipper å åpne alle nettsidene dine i forskjellige nettlesere. Dessverre så var det ikke så mange som tenkte universell utforming i internettets barndom, og aria er et alternativ til løsning. Men alle er bedre tjent med at nettsider blir universelt utformet fra starten og rett i html-koden uten ekstra tilleggsspråk.'
      }
    ],

    // DOM Objects
    quizDiv              = $('.quiz'),
    quizSkjemaForm       = $(document.createElement('form')),
    nesteSpoersmaalKnapp = $(document.createElement('button')), // #todo: Check if attr is needed? something about type not supported in IE?
    avgiSvarKnapp        = $(document.createElement('button')),
    resultatDiv          = $(document.createElement('div')),
    // Global Values
    spoersmaalPosisjon   = 0, // First question
    antallRiktige        = 0,
    antallSpoersmaal     = quiz.length;

genererSpoersmaal();

quizSkjemaForm
    .prop('id', 'quizSkjema')
    .appendTo(quizDiv);

// Neste spørsmål-knapp og alle dens funksjoner og attributter.
nesteSpoersmaalKnapp
    .prop
    ({
    accesskey : 2,
    id        : 'nesteSpoersmaal',
    type      : 'button',
    role      : 'button',
    value     : 'Neste spørsmål',
    disabled  : true
    })
    .attr('aria-disabled', true)
    .text('Neste spørsmål')
    .appendTo(quizDiv)
    .click(function()
    {
    if ($('input:radio').is(':checked'))
    {
        nesteSpoersmaalKnapp.prop('disabled', true)
          .attr('aria-disabled', true);
        avgiSvarKnapp.prop('disabled', false)
          .attr('aria-disabled', false);
        //avgiSvarKnapp.prop('aria-disabled', false);
        resultatDiv.empty();
        spoersmaalPosisjon++;
        genererSpoersmaal();
        $('#fieldset' + (spoersmaalPosisjon-1)).remove(); // #todo: hvordan takler skjermlesere hide i forhold til remove?
    }
    else
    {
        alert('Vennligst velg et svaralternativ');
    }
    });

// Avgi svar-knapp
avgiSvarKnapp
    .prop
    ({
      accesskey : 1,
      id        : 'avgiSvar',
      type      : 'button',
      role      : 'button',
      value     : 'Avgi svar'
    })
    .attr('aria-disabled', false)
    .text('Avgi svar')
    .appendTo(quizDiv)
    .click(function()
    {
      if ($('input:radio').is(':checked'))
      {
          avgiSvarKnapp.prop('disabled', true)
            .attr('aria-disabled', true);
          nesteSpoersmaalKnapp.prop('disabled', false)
            .attr('aria-disabled', false);
          $('#fieldset' + spoersmaalPosisjon).children().prop('disabled', true);
          sjekkSvar();
          resultatDiv.focus();
      }
    else
    {
        alert('Vennligst velg et svaralternativ');
    }
    });

// Restart-knapp 
$(document.createElement('button'))
    .prop
    ({
        accesskey : 3,
        id        : 'restart',
        type      : 'button',
        role      : 'button',
        value     : 'Restart'
    })
    .attr('aria-disabled', false)
    .text('Restart')
    .appendTo(quizDiv)
    .click(function()
    {
      // Reset values
      spoersmaalPosisjon = 0;
      antallRiktige      = 0;
      // Reset DOM
      resultatDiv.empty();
      quizSkjemaForm.empty();
      $('fieldset').remove();
      avgiSvarKnapp.prop('disabled', false).show()
        .attr('aria-disabled', false);
      nesteSpoersmaalKnapp.prop('disabled', true).show()
        .attr('aria-disabled', true);
      // Generate first question again
      genererSpoersmaal();
    });
    
resultatDiv
    .prop('tabindex', '-1')
    .attr
    ({
      'aria-live'   : 'assertive',
      'aria-atomic' : true
    })
    .addClass('resultat')
    .appendTo(quizDiv);


function sjekkSvar() {
    resultatDiv.empty();
    resultatDiv.hide();

    var svarStatus,
    svaret = Number($('input[name=svar' + spoersmaalPosisjon + ']:checked', '#fieldset' + spoersmaalPosisjon).val());

    // #todo: lage paragrafelement
    // #todo-anders: Lage array med alle svarene til brukeren
    // #todo-anders: Lage multimodal svaroutput.
    // #todo: Arr push svaret.
    
    var svarForklaringen;
    
    if (typeof quiz[spoersmaalPosisjon].explanation !== 'undefined')
    {
        svarForklaringen = quiz[spoersmaalPosisjon].explanation;
    }
    else
    {
        svarForklaringen = 'Ingen svarforklaring.';
    }

    if (svaret === quiz[spoersmaalPosisjon].correct)
    {
        $('label[for=' + 'alternativ' + spoersmaalPosisjon + svaret + ']"').addClass('riktigSvar');
        resultatDiv.append('<p><strong>Riktig!</strong> ' + svarForklaringen + '</p>');
        antallRiktige++;
    }
    else
    {
        resultatDiv.append('Galt! ' + svarForklaringen);
    }
    
    resultatDiv.append('<br />');
        
    var riktigProsent = Math.round((antallRiktige / antallSpoersmaal)*100);
    resultatDiv.append('<p>' + antallRiktige + ' av ' + antallSpoersmaal + ' riktige svar (' + riktigProsent + '%)</p>' ).fadeIn('slow');
}

function genererSpoersmaal() {

    if (spoersmaalPosisjon === antallSpoersmaal)
    {
        nesteSpoersmaalKnapp.add(avgiSvarKnapp).hide();
        alert('YOU WIN');
    }
    
    if (spoersmaalPosisjon !== antallSpoersmaal)
    {
        var spoersmaalFieldset = $(document.createElement('fieldset'));
    
    spoersmaalFieldset
        .prop('id', 'fieldset' + spoersmaalPosisjon)
        .hide()
        .appendTo(quizSkjemaForm);
    
    // Legend med spørsmålet
    $(document.createElement('legend'))
        .prop('id', 'legend' + spoersmaalPosisjon).text(quiz[spoersmaalPosisjon].question)
        .appendTo(spoersmaalFieldset);
    
    // Fieldset med svaralternativene
    for (var j = 0; j < quiz[spoersmaalPosisjon].answers.length; j++)
    {
      var alternativID = 'alternativ' + spoersmaalPosisjon + j,
      radioAlternativer = $(document.createElement('input'));
      
      radioAlternativer
        .prop
        ({
            id: alternativID,
            type: 'radio',
            name: 'svar' + spoersmaalPosisjon,
            value: j
        })
        .appendTo(spoersmaalFieldset);
      
      $(document.createElement('label'))
        .prop('for', alternativID)
        .text(quiz[spoersmaalPosisjon].answers[j])
        .appendTo(spoersmaalFieldset);
      
      $(document.createElement('br')).appendTo(spoersmaalFieldset);
    }
    
      spoersmaalFieldset.fadeIn('slow');

    }
}

});