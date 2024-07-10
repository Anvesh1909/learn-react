import React from 'react'

function JSXSyntax() {
    
    let h2 = React.createElement('h2',null,'h2 using variable')

    let d = React.createElement('div', 
        {id: 'DivID' , className: 'DivClassName'},
        'react.createElemet jsx syntax',
        React.createElement('h1',null,'h1 using jsx'),
        React.createElement('h1',
            {id:'h1ID', className:'h1ClassName'},
            'h1 with id and class'
        ),
        h2
    );




    return d

}

export default JSXSyntax