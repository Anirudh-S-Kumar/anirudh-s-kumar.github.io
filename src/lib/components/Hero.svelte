<div class="terminal">
    Anirudh

</div>

<style>
    @keyframes blink {
      0% {opacity: 0;}
      50% {opacity: 1;}
      100% {opacity: 0;}
    }
    
    .terminal {
      color: white;
      padding: 20px;
      font-family: 'Fira Mono', monospace;
      font-size: 2rem;
      margin-top: 5rem;
    }
    
    @media (min-width: 640px) {
      .terminal {
        font-size: 3rem;
      }
    }

    @media (min-width: 1024px) {
      .terminal {
        font-size: 4.5rem;
      }
    }

    .terminal::before {
      content: '>\A0';
    }
    
    .terminal::after {
      content: '\00a0';
      background-color: white;
      animation: blink 1s infinite;
    }
    </style>