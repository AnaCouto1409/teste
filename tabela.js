import React, {component, Fragment} from 'React';
import table from  'dataTable.js';

class table extends component{
    render(){
        const campos =[{ titulo: 'Autores', campo: 'nome'},
        { titulo: 'livros', dados: 'livro'},
        { titulo: 'preços', dados: 'preço'}, 
        'livros',
        'preços',
        'remover'
    ]
        const{autor, removeAutor} = this.props
        return(
            <table>
                <tablehand>
                <tablecell>Autonomia</tablecell>
                <tablecell>Autodorigido</tablecell>
                <tablecell>Workplace in your own</tablecell>
                <tablecell>Private</tablecell>
                </tablehand>
                <tablerow>
                    <tablecell>Autores</tablecell>
                    <tablecell>Livros</tablecell>
                    <tablecell>Preço</tablecell>
                    <tablecell>Remover</tablecell>
                </tablerow>
                <tablebody>{autores.map(autor => (
                    <tablerow key={autores}>
                        <button>
                            return(
                                <Fragment>
                                    <header />
                                    <div className='container mb 10'>
                                        <h1>Casa do Código</h1>
                                        <tabela 
                                        campos={campos}
                                        dados={this.state.autores}
                                        removeAutor={this.removeAutor}
                                        />
                                        <form escutadorDeSubmit={this.escutadorDeSubmit} />
                                    </div>
                                </Fragment>
                            )
                        </button>
                    </tablerow>
                ))}
                </tablebody>
            </table>
        )
    }
}