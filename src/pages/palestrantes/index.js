import React, { Component } from "react";
import Card from "./../../components/card";

const graduacoesH = [
  {
    ano: 1988,
    curso:
      "Graduação em Tecnólogo Em Processamento de Dados. Universidade Salvador, UNIFACS, Brasil."
  },
  {
    ano: 2002,
    curso:
      "Mestrado em Redes de Computadores. Universidade Salvador, UNIFACS, Brasil. "
  },
  {
    ano: 2006,
    curso:
      "Doutorado em Ciência da Computação (Conceito CAPES 7). Universidade Estadual de Campinas, UNICAMP, Brasil. "
  }
];

const graduacoesM = [
  {
    ano: 1988,
    curso:
      "Graduação em Tecnólogo Em Processamento de Dados. Universidade Salvador, UNIFACS, Brasil."
  },
  {
    ano: 2002,
    curso:
      "Mestrado em Redes de Computadores. Universidade Salvador, UNIFACS, Brasil. "
  },
  {
    ano: 2006,
    curso:
      "Doutorado em Ciência da Computação (Conceito CAPES 7). Universidade Estadual de Campinas, UNICAMP, Brasil. "
  }
];

const descLongH = `É doutor em Ciência da Computação (UNICAMP, 2006), Mestre em Redes de Computadores (UNIFACS, 2002),
 Tecnólogo em Processamento de Dados (UNIFACS, 1988); é professor do Instituto de Computação da UNICAMP e membro do LIS 
 (Laboratory of Information Systems). Seus principais interesses em pesquisa abrangem uma convergência dos seguintes tópicos:
  Web e Web Semântica, bancos de dados, autoria multimídia, bibliotecas digitais, engenharia de software (especialmente componentes de software)
   e também aplicações desses tópicos combinados em e-Science e Educação. Desde 1993, tem desenvolvido um sistema de autoria originalmente chamado
    Casa Mágica, cuja nova versão na Web foi renomeada para Componere. No contexto de semântica social, desenvolveu com um orientando de mestrado
     um framework para representar modelos abstratos por detrás de iniciativas relacionadas a ?ontologias sociais?, e um modelo que combina 
     a semântica de folksonomias e ontologias -- as ontologias folksonomizadas. Atualmente, é diretor do Museu Exploratório de Ciências da Unicamp.`;

const descLongM = `Professora titular da UNICAMP desde outubro 2011 na área de Engenharia de Software,
 com Ph.D. in Computing Science pela Universidade de Newcastle Upon Tyne, Grã-Bretanha(1994). mestrado
  em Ciência da Computação pela UNICAMP (1989) e graduação em Ciência da Computação pela UNICAMP (1986).
   Obteve livre docência em Engenharia de Software pela UNICAMP (maio/2001) e atuou como professora associada
    da UNICAMP de 2001-2011. Desenvolve pesquisas em Engenharia de Software, atuando em temas, como por 
    exemplo, arquiteturas de software, desenvolvimento de software baseado em componentes, desenvolvimento
     baseado em aspectos, linhas de produtos de software e sistemas auto-adaptáveis. Ela atua também na área
      de Tolerância a Falhas, com ênfase em desenvolvimento de software tolerante a falhas, tratamento de exceções,
       ações atômicas coordenadas e diversidade de software. Ela publicou, com outros autores, mais de 100 artigos
        científicos, capítulos de livros e livros nessas áreas, e também orientou vários alunos de mestrado e doutorado
         na UNICAMP. Contate-a no endereço cmrubira at ic.unicamp.br`;

export default class Palestrantes extends Component {
  render() {
    return (
      <div>
        <Card
          foto="https://a9p9n2x2.stackpathcdn.com/wp-content/blogs.dir/1/files/2019/01/iStock-922757424-1080x675.jpg"
          nome="Cecília Mary Fischer Rubira"
          palestra="ReactJS"
          descLong={descLongM}
          desc="Professora titular da UNICAMP desde outubro 2011 na área de Engenharia de Software, com Ph.D. in Computing Science pela Universidade de Newcastle Upon Tyne, Grã-Bretanha(1994)."
          formacoes={graduacoesM}
        />
        <Card
          foto="https://wdef.com/wp-content/uploads/2018/11/2018-11-06t054310z-1334124005-rc1be15a8050-rtrmadp-3-people-sexiest-man-3.jpg"
          nome="André Santanchè"
          palestra="Componentização"
          descLong={descLongH}
          desc="doutor em Ciência da Computação (UNICAMP, 2006), Mestre em Redes de Computadores (UNIFACS, 2002), Tecnólogo em Processamento de Dados (UNIFACS, 1988);"
          formacoes={graduacoesH}
        />
        <Card
          foto="https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-j1kt8vldbi81uepo253j2hgs41-20180212150910.Medi.jpeg"
          nome="Maria Eduarda"
          palestra="ReactJS"
          descLong={descLongM}
          desc="Professora titular da UNICAMP desde outubro 2011 na área de Engenharia de Software, com Ph.D. in Computing Science pela Universidade de Newcastle Upon Tyne, Grã-Bretanha(1994)."
          formacoes={graduacoesM}
        />
      </div>
    );
  }
}
