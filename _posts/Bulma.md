---
layout: post
title: "Bulma"
date: 2014-07-22 16:25:06 -0700
categories: frontend
---

# Bulma Framework CSS

O Bulma é uma estrutura CSS livre e de código aberto baseada no Flexbox (organiza elementos na página quando o layout precisa ser visualizado em telas e dispositivos de tamanhos diferentes).

**A configuração**

Configurar o Bulma é super fácil, e você pode fazê-lo de várias maneiras diferentes, baixá-lo diretamente dos documentos ou usando um CDN. Após instalar o bulma, adicionaremos ao código:

`<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.2/css/bulma.min.css">`

Isso nos dará acesso às classes Bulma. E isso é tudo o que Bulma é: uma coleção de classes.
 
**Modificadores (classes)**
 
A primeira coisa que você deve aprender sobre o Bulma são as classes modificadoras. Estes permitem que você defina estilos alternativos para quase todos os elementos Bulma. Todos começam com  is-* ou has-*, e então você substitui o *com o estilo que você quer.

***Vamos começar com alguns exemplos básicos:***

*Botões*

para transformar um botão normal em um botão Bulma, vamos simplesmente dar a classe de button.

`<button class = "button">Click here</ button>`

Que resulta no seguinte estilo:

![Imagem](https://lh3.googleusercontent.com/0mnoZXFWvMCnMWuIAjFngg1Ve8U29jp-nNls4ltLAOq2ENkCxzO-6F_QPTkfQyn25WxBqXOoHG9YTo2-Xl-ZujmjpzqqPZDW7eDSFtmOp66u2mle4cnhNtJWc0c7Cv-8taBnDOK0) 

Como você pode ver, ele tem um bom design plano por padrão. Para mudar o estilo, usaremos modificadores Bulma. Vamos começar fazendo o botão maior (classe “is-larger”), verde (classe is-success) e com cantos arredondados (classe is-rounded):


`<button class = "button is-larger is-success is-rounded">Click here</ button>`

O resultado é um botão de aparência agradável:

![Imagem](https://lh3.googleusercontent.com/a-Eoc-BF3ZJ39_WMx6AcUkYrayBRFiYgQ4K5AI78Nrw01y1bHEKxhKS6DGq23v_MMK86R6AxPHEgQfJd7MA3WI4_pC9XYb5LyI1BVIpySoJoHLnbpBvLDLOvfRqW2wgtm21z5ml6)

Finalmente, vamos também usar um dos “has-*”modificadores. Eles normalmente controlam o que está dentro do elemento. No nosso caso, o texto. Vamos adicionar “has-text-weight-bold”.

Aqui está o resultado:

![Imagem](https://lh6.googleusercontent.com/XJpUqGPpDEJbsdmlPcwXniWrSWc61CYNt1n1ICO712TGdXzuhgS23tvbcsL-jnn_OMQ-75IjLcLC0HvObBdPRgaXwzKEf7pPNdnyClY)

Eu recomendo que você brinque com combinações das várias classes para entender como esse sistema é flexível. As combinações são quase infinitas. Confira a seção de botões nos documentos para mais informações.

**Colunas**

O principal de qualquer framework CSS é como eles resolvem colunas, o que é relevante para quase todos os sites que você já construiu. O Bulma é baseado no Flexbox, então é muito simples criar colunas. Vamos criar uma linha com quatro colunas.

```
<div class="columns">
       <div class="column">First column</div>
       <div class="column"> Second column </div>
       <div class="column"> Third column </div>
       <div class="column"> Fourth column </div>
</div>
```

Primeiro, estamos criando uma `<div>` container com uma classe `“columns”`, em seguida, damos a cada uma das divs menores uma classe `“column”`. Isso resulta no seguinte:

![Imagem](https://lh6.googleusercontent.com/rqb02yQfdRHWxBz0mFmZB11-NoSoKC9iR-XUQkZhMWM7H6AE3qSpZXX10XP0TT5QSuHUFEv4N_JrDX8x0-LxVANFVSnc21uX15dfE3I)

Observe que você pode adicionar quantas colunas desejar. O Flexbox se encarrega de dividir o espaço igualmente entre eles.

Para dar as cores das colunas, podemos substituir o texto dentro delas por uma `<p>` tag e dar a ela a “notification” classe e um is-* modificador. Assim, por exemplo:

`<p class = "notification is-success"> Primeira coluna </p>`


Vamos fazer isso usando os `“is-info”`,  `“is-success”`, `“is-warning”` e `“is-danger”` modificadores, o que resulta no seguinte:

![Imagem](https://lh3.googleusercontent.com/DZt8Vqfr0k2Bbg8uIXPF2xO9nT4U7KodNgHADAk1lxoP7fvoN2DJaE59Yzn6q7Ns3D-QSPhe2cz_SPEzGNGzSBIGkxOkL3YKuQD08SQ)

A classe “notification” é, na verdade, apenas destinada a alertar os usuários sobre algo, pois permite preencher o plano de fundo com uma cor usando os is-*modificadores. Aqui funciona bem para separar as colunas.

Também podemos controlar facilmente a largura de uma coluna. Vamos adicionar o is-half modificador à coluna verde.

```
<div class="column is-half">
    <p class = "notification is-sucess"> Segunda coluna </p>
</div>
```

O que resulta na segunda coluna ocupando agora metade da largura, enquanto os outros três ocupam um terço da metade restante de cada um.

![Imagem](https://lh6.googleusercontent.com/gIhlfzPzxyFiTcZQHIYNTDKs7rGhMxIRkEAWjUKV8HfJlksuYXR0cPNeReUW_Z8Q4pALOPD5oaIaKtookNYa2M-YYbxzA8Hbejex-Lq-8oRp-gkHwCxHsmd7LpOpueaSW4LpVerY)

**Hero**

Finalmente, vamos também aprender como criar um herói em Bulma. Vamos usar a semântica `<section>`, dar uma classe “hero” e “is-info” dar alguma cor. Também precisamos adicionar uma `<div>` criança à turma hero-body.

```
<section class="hero is-sucess">
c     <div class = "hero-body"> </ div>
</section>
```

O resultado será este:

![Imagem](https://lh3.googleusercontent.com/Uez71VPpXHo_OdTVLDQoqPeDDE4u0KtejfQQkH9oeNB1mVHHE8OkdcABOFajiKgGf2tzf-awxRZpQIjTgmSk5EZh0uTZD25WoKyfyWI)

Para fazer esse herói fazer algo significativo, vamos adicionar um elemento de contêiner dentro do corpo e adicionar um título e uma legenda.
```
<div class="container">
      <h1 class="title">Primary title</h1>
      <h2 class="subtitle">Primary subtitle</h2>
</div>
```
![Imagem](https://lh5.googleusercontent.com/sG_VPFqDOwwJZGfFhGfZQXz7rrINUj63kFncOiCWMRx_DG3Kfd1uSJnPgIPsNEQc-jf0872ctAj09Aq9qEHYmSwVmjvQnKNC92Yhts0)

Agora está começando a ficar bom! Se quisermos que seja maior, podemos simplesmente adicionar is-medium <section> própria tag:
```
<section class="hero is-info is-medium">
  …
</section>
```
![imagem](https://lh5.googleusercontent.com/2KbjS3crITnsq5_xCQWPkFCv77kEAtjGHy-9ryOKq7HRQ0E8NlHox2D3UEXVP19ZIU2U2Zq4tba0iAf80aGTLuTiedLj7XacIfLHNAJf)

 E é isso!

Existem vários componentes como cards, tabelas, menus, barras de navegação e várias outras coisas fáceis de usar e simples de compreender.
Você agora tem um gostinho básico de como Bulma funciona, e a melhor parte é que o resto da biblioteca é tão intuitivo e fácil quanto os conceitos que você viu até agora. Então, se você entender isso, você entenderá o resto sem problemas.

Caso queira explorar, a documentação do Bulma se encontra em: https://bulma.io/documentation/