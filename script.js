document.getElementById('saveButton').addEventListener('click', () => {
    const name = document.getElementById('name').value.trim();
    const age = document.getElementById('age').value.trim();
    
    if (name === '' || age === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }
    
    const userData = { name, age  };
    localStorage.setItem('user', JSON.stringify(userData));
    alert('Dados salvos no localStorage!');
});
    
document.getElementById('loadButton').addEventListener('click', () => {
    const userData = localStorage.getItem('user');
    if (userData) {
        const { name, age} = JSON.parse(userData);
        document.getElementById('output').textContent = `Nome: ${name}, Idade: ${age}`; 
    } else {
        document.getElementById('output').textConten = "Nenhum dado encontrado."; 
    }
});
    

document.getElementById('clearButton').addEventListener('click', () => {
    localStorage.removeItem('user');
    document.getElementById('output').textContent = 'Dados limpos.';
    
});
