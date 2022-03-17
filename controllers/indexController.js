const axios = require('axios')

const username = 'Koji-desu';

module.exports = { 
    showFollowers: async(req,res)=>{
        
        let login = req.params.login ? req.params.login : username
        const url = `https://api.github.com/users/${login}/followers`;

        try{
            let seguidores = (await axios.get(url)).data
            seguidores = seguidores.map(s=>{    return {
                login: s.login, 
                img: s.avatar_url, 
                url: s.html_url
            }})

            console.log(seguidores)
            res.render('index', {seguidores})

        } catch (error) {
            console.log(error) 
            res.render('error', {error, message: "Falha ao carregar"})
            }
        }
    }
