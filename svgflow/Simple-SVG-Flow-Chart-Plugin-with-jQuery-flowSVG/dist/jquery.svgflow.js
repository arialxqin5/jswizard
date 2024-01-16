
///////////////////// start flow chart ////////////////////////////////////////////////////////////
flowSVG.draw(SVG('drawing').size(900, 1100));
flowSVG.config({
    interactive: true,
    showButtons: false,
    connectorLength: 60,
    scrollto: true
});
flowSVG.shapes(
    [
        {
            label: 'knowPolicy',
            type: 'decision',
            text: [
                'Are you ',
                'more than 18',
                'years old?'
            ],
            yes: 'hasOAPolicy',
            no: 'checkPolicy'
        },
        {
            label: 'hasOAPolicy',
            type: 'decision',
            text: [
                'Do you like',
                'Apple?'
            ],
            yes: 'CCOffered',
            no: 'canWrap'
        },
        {
            label: 'CCOffered',
            type: 'decision',
            text: [
                'Do you like',
                'swim?'
            ],
            yes: 'canComply',
            no: 'checkGreen'
        },
        {
            label: 'canComply',
            type: 'finish',
            text: [
                'Great - qualified. ',
                'Please complete'
            ],
            links: [
                {
                    text: 'application form',
                    url: 'https://www.epicore.ualberta.ca/home/contact-us',
                    target: '_blank'
                }
            ],
            tip: {
                title: 'Note',
                text:
                    [
                        'You must put your',
                        'signature and mail',
                        'the hard copy'
                    ]
            }
        },
        {
            label: 'canWrap',
            type: 'decision',
            text: [
                'People do not like',
                'apple has mental issue'
            ],
            yes: 'checkTimeLimits',
            no: 'doNotComply'
        },
        {
            label: 'doNotComply',
            type: 'finish',
            text: [
                'You are not qualified.'
            ],
            tip: {
                title: 'Note',
                text:
                    [
                        'If you really do not',
                        'like apple, you must',
                        'see doctor'
                    ]
            }
        },
        {
            label: 'checkGreen',
            type: 'process',
            text: [
                'We can also teach',
                'you swimming'
            ],
            next: 'journalAllows',
        },
        {
            label: 'journalAllows',
            type: 'decision',
            text: [
                'Do you want to',
                'learn swimming'
            ],
            yes: 'checkTimeLimits',
            no: 'cannotComply',
            orient: {
                yes: 'r',
                no: 'b'
            }

        },
        {
            label: 'checkTimeLimits',
            type: 'process',
            text: [
                'Make sure you are',
                'not scared of water'
            ],
            next: 'depositInWrap'
        },
        {
            label: 'cannotComply',
            type: 'finish',
            text: [
                'You are not',
                'qualified for',
                'the study'
            ],
            tip: {
                title: 'Note',
                text:
                    [
                        'If you change',
                        'your mind, please',
                        'contact us'
                    ]
            }
        },
        {
            label: 'depositInWrap',
            type: 'finish',
            text: [
                'Contact Us'
            ],
            tip: {
                title: 'Note',
                text:
                    [
                        'You must sign',
                        'all the paperworks'
                    ]
            }
        },
        {
            label: 'checkPolicy',
            type: 'process',
            text: [
                'Sorry you are not qualified',
                'for the study'
            ],
            links: [
                {
                    text: 'More about study ',
                    url: 'https://www.epicore.ualberta.ca/home/react',
                    target: '_blank'
                }
            ]
        }
    ]);