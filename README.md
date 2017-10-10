## Sinopse

Esta é a parte Backend do trabalho final da matéria Desenvolvimento de Aplicações Móveis Aplicando Internet das Coisas do MBA em Desenvolvimento de Jogos e Aplicações para Dispositivos Móveis e IoT da FIAP. Este servidor disponibiliza uma página web a qual é atualizada em tempo real via web socket sempre que ocorre uma chamada em sua api.

## Motivação

 Para demonstrar a integração de Hardware, Aplicação Mobile e Servidor Real Time esse projeto possui uma dinâmica simples na qual uma mudança no estado do Hardware é comunicada em tempo real com o app via Bluetooth, que por sua vez faz uma chamada HTTP a um servidor que disponibiliza uma pagina web a qual mostra o estado do hardware em tempo real.

 ## Utilizaçao

 O Servidor foi colocado no ar utilizando o BaaS Heroku e o App faz uma chamada HTTP para a API do Servidor para atualiza-lo quando ele percebe uma mudança de estado no Hardware via comunicação Bluetooth.