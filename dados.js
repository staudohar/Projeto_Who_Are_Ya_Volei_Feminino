const playerDataArray = [
    { nome: "Nyeme Costa Nunes", pais: "Brasil", ondeJoga: "Brasil", clube: "Minas", idade: "25", altura: "1.75", posicao: "Libero", imagem: "https://volleybox.net/media/upload/players/1717524691ml8gk.png" },

    { nome: "Diana Duarte Alecrim", pais: "Brasil", ondeJoga: "Turquia", clube: "THY", idade: "25", altura: "1.94", posicao: "Central", imagem: "https://women.volleybox.net/media/upload/players/17284850406mNVp.png" },

    { nome: "Macris Carneiro", pais: "Brasil", ondeJoga: "Brasil", clube: "Praia Clube", idade: "35", altura: "1.77", posicao: "Levantadora", imagem: "https://women.volleybox.net/media/upload/players/1730423381Eo4Mj.png" },

    { nome: "Thaisa Daher de Menezes", pais: "Brasil", ondeJoga: "Brasil", clube: "Minas", idade: "37", altura: "1.96", posicao: "Central", imagem: "https://women.volleybox.net/media/upload/players/1716695571z2jrm.png" },

    { nome: "Rosamaria Montibeller", pais: "Brasil", ondeJoga: "Japão", clube: "Denso Airbees", idade: "30", altura: "1.85", posicao: "Oposta", imagem: "https://women.volleybox.net/media/upload/players/17189017237M087.png" },

    { nome: "Roberta Ratzke", pais: "Brasil", ondeJoga: "Turquia", clube: "THY", idade: "34", altura: "1.85", posicao: "Levantadora", imagem: "https://women.volleybox.net/media/upload/players/1728485128T2Dly.png" },

    { nome: "Gabriela Guimaraes", pais: "Brasil", ondeJoga: "Italia", clube: "Conegliano", idade: "30", altura: "1.80", posicao: "Ponteira", imagem: "https://women.volleybox.net/media/upload/players/17315107866Wr9o.png" },

    { nome: "Ana Cristina", pais: "Brasil", ondeJoga: "Turquia", clube: "Fenerbace", idade: "20", altura: "1.93", posicao: "Ponteira", imagem: "https://women.volleybox.net/media/upload/players/1738933075kQ6mh.png" },

    { nome: "Natinha/Natalia Pereira de Araujo", pais: "Brasil", ondeJoga: "Brasil", clube: "Praia Clube", idade: "27", altura: "1.65", posicao: "Libero", imagem: "https://women.volleybox.net/media/upload/players/17175251651Pufm.png" },

    { nome: "Carol/Ana Carolina da Silva", pais: "Brasil", ondeJoga: "Italia", clube: "Scandicci", idade: "33", altura: "1.85", posicao: "Central", imagem: "https://women.volleybox.net/media/upload/players/1731514752Lhh4t.png" },

    { nome: "Julia Bergmann", pais: "Brasil", ondeJoga: "Turquia", clube: "THY", idade: "24", altura: "1.91", posicao: "Ponteira", imagem: "https://women.volleybox.net/media/upload/players/1739885826EXm3W.png" },

    { nome: "Tainara Santos", pais: "Brasil", ondeJoga: "China", clube: "Shangai", idade: "24", altura: "1.90", posicao: "Oposta", imagem: "https://women.volleybox.net/media/upload/players/1730688553Xko7p.png" },

    { nome: "Lorenne Geraldo", pais: "Brasil", ondeJoga: "Brasil", clube: "Sesi Bauru", idade: "29", altura: "1.87", posicao: "Oposta", imagem: "https://women.volleybox.net/media/upload/players/1716696058Qtg6C.png" },

    { nome: "Maiara Basso", pais: "Brasil", ondeJoga: "Brasil", clube: "Praia Clube", idade: "29", altura: "1.87", posicao: "Ponteira", imagem: "https://women.volleybox.net/media/upload/players/1730380678G3C9Q.png" },

    { nome: "Sofya Kuznetsova", pais: "Rússia", ondeJoga: "Brasil", clube: "Praia Clube", idade: "25", altura: "1.82", posicao: "Ponteira", imagem: "https://women.volleybox.net/media/upload/players/1730380644yvYR8.png" },

    { nome: "Adenizia da Silva", pais: "Brasil", ondeJoga: "Brasil", clube: "Praia Clube", idade: "38", altura: "1.85", posicao: "Central", imagem: "https://women.volleybox.net/media/upload/players/1732454646za6wj.png" },

    { nome: "Carol Gattaz", pais: "Brasil", ondeJoga: "Brasil", clube: "Praia Clube", idade: "43", altura: "1.92", posicao: "Central", imagem: "https://women.volleybox.net/media/upload/players/1682172447Gdf7p.png" },

    { nome: "Helena Wenk Hoengen", pais: "Brasil", ondeJoga: "Brasil", clube: "Sesc Flamengo", idade: "20", altura: "2.00", posicao: "Ponteira", imagem: "https://women.volleybox.net/media/upload/players/1729816060Wjjx2.png" },

    { nome: "Lorena Viezel", pais: "Brasil", ondeJoga: "Brasil", clube: "Sesc Flamengo", idade: "25", altura: "1.90", posicao: "Central", imagem: "https://women.volleybox.net/media/upload/players/1699215010EwC9D.png" },

    { nome: "Lais Vasques", pais: "Brasil", ondeJoga: "Brasil", clube: "Sesc Flamengo", idade: "29", altura: "1.72", posicao: "Libero", imagem: "https://women.volleybox.net/media/upload/players/1699215010EwC9D.png" },

    { nome: "Luzia Nezzo", pais: "Brasil", ondeJoga: "Brasil", clube: "Barueri", idade: "20", altura: "1.99", posicao: "Central", imagem: "https://women.volleybox.net/media/upload/players/1732909141O06jQ.png" },

    { nome: "Natalia Zilio", pais: "Brasil", ondeJoga: "Brasil", clube: "Osasco", idade: "35", altura: "1.86", posicao: "Ponteira", imagem: "https://volleybox.net/media/upload/players/17166960498plOT.png" },


    { nome: "Tifanny Abreu", pais: "Brasil", ondeJoga: "Brasil", clube: "Osasco", idade: "40", altura: "1.92", posicao: "Oposta", imagem: "https://volleybox.net/media/upload/players/17308966888KRSP.png" },

    { nome: "Camila Brait", pais: "Brasil", ondeJoga: "Brasil", clube: "Osasco", idade: "36", altura: "1.70", posicao: "Libero", imagem: "https://volleybox.net/media/upload/players/17308966888KRSP.png" },

    { nome: "Celeste Plak", pais: "Holanda", ondeJoga: "Brasil", clube: "Minas", idade: "29", altura: "1.90", posicao: "Ponteira", imagem: "https://volleybox.net/media/upload/players/1728182679wK4d8.png" },

    { nome: "Yonkaira Pena", pais: "República Dominicana", ondeJoga: "Brasil", clube: "Minas", idade: "31", altura: "1.90", posicao: "Ponteira", imagem: "https://volleybox.net/media/upload/players/172990960623xmx.png" },

    { nome: "Priscila Daroit", pais: "Brasil", ondeJoga: "Brasil", clube: "Minas", idade: "36", altura: "1.86", posicao: "Ponteira", imagem: "https://volleybox.net/media/upload/players/1730414902c04o9.png" },

    { nome: "Julia Kudiess", pais: "Brasil", ondeJoga: "Brasil", clube: "Minas", idade: "22", altura: "1.90", posicao: "Central", imagem: "https://volleybox.net/media/upload/players/1716695601azjh6.png" },

    
        { nome: "Kisy Nascimento", pais: "Brasil", ondeJoga: "Brasil", clube: "Minas", idade: "25", altura: "1.90", posicao: "Oposta", imagem: "https://volleybox.net/media/upload/players/1730414949je4aB.png" },
    
 
        { nome: "Dani Lins", pais: "Brasil", ondeJoga: "Brasil", clube: "Sesi Bauru", idade: "40", altura: "1.83", posicao: "Levantadora", imagem: "https://volleybox.net/media/upload/players/1732454615Xv7ut.png" },
    
        { nome: "Leia Silva", pais: "Brasil", ondeJoga: "Brasil", clube: "Sesi Bauru", idade: "39", altura: "1.70", posicao: "Libero", imagem: "https://volleybox.net/media/upload/players/1729297214vu2WQ.png" },
    
        { nome: "Alessia Orro", pais: "Itália", ondeJoga: "Itália", clube: "Milano", idade: "26", altura: "1.80", posicao: "Levantadora", imagem: "https://volleybox.net/media/upload/players/1728697533wOi4e.png" },
    
        { nome: "Paola Egonu", pais: "Itália", ondeJoga: "Itália", clube: "Milano", idade: "26", altura: "1.95", posicao: "Oposta", imagem: "https://volleybox.net/media/upload/players/17283613551DUzT.png" },
    
        { nome: "Ekaterina Antropova", pais: "Itália", ondeJoga: "Itália", clube: "Scandicci", idade: "21", altura: "2.02", posicao: "Oposta", imagem: "https://volleybox.net/media/upload/players/1731514833YB5Gw.png" },
    
        { nome: "Caterina Bosetti", pais: "Itália", ondeJoga: "Turquia", clube: "VakifBank", idade: "31", altura: "1.80", posicao: "Ponteira", imagem: "https://volleybox.net/media/upload/players/1726970958oH9sS.png" },
    
        { nome: "Myriam Sylla", pais: "Itália", ondeJoga: "Itália", clube: "Milano", idade: "30", altura: "1.84", posicao: "Ponteira", imagem: "https://volleybox.net/media/upload/players/1726970958oH9sS.png" },
    
        { nome: "Anna Danesi", pais: "Itália", ondeJoga: "Itália", clube: "Milano", idade: "28", altura: "1.95", posicao: "Central", imagem: "https://volleybox.net/media/upload/players/1728697470UYu0a.png" },
    
        { nome: "Marina Lubian", pais: "Itália", ondeJoga: "Itália", clube: "Conegliano", idade: "24", altura: "1.93", posicao: "Central", imagem: "https://volleybox.net/media/upload/players/1731511030G7RRe.png" },
    
        { nome: "Sarah Fahr", pais: "Itália", ondeJoga: "Itália", clube: "Conegliano", idade: "23", altura: "1.92", posicao: "Central", imagem: "https://volleybox.net/media/upload/players/17315110876Fpln.png" },
    
        { nome: "Monica De Gennaro", pais: "Itália", ondeJoga: "Itália", clube: "Conegliano", idade: "38", altura: "1.74", posicao: "Libero", imagem: "https://volleybox.net/media/upload/players/17315111177mWYt.png" },
    
        { nome: "Brenda Castillo", pais: "República Dominicana", ondeJoga: "Itália", clube: "Scandicci", idade: "32", altura: "1.67", posicao: "Libero", imagem: "https://volleybox.net/media/upload/players/1731514505jW8cu.png" },
    
        { nome: "Maja Ognjenovic", pais: "Sérvia", ondeJoga: "Itália", clube: "Scandicci", idade: "40", altura: "1.83", posicao: "Levantadora", imagem: "https://volleybox.net/media/upload/players/1731514589589OA.png" },
    
        { nome: "Bojana Drca", pais: "Sérvia", ondeJoga: "Turquia", clube: "Fenerbace", idade: "36", altura: "1.86", posicao: "Levantadora", imagem: "https://volleybox.net/media/upload/players/1738931558VlR08.png" },
    
        { nome: "Tijana Boskovic", pais: "Sérvia", ondeJoga: "Turquia", clube: "Eczacibasi", idade: "27", altura: "1.94", posicao: "Oposta", imagem: "https://volleybox.net/media/upload/players/1739884699Qx3SL.png" },
    
        { nome: "Jovana Stevanovic", pais: "Sérvia", ondeJoga: "Turquia", clube: "Eczacibasi", idade: "32", altura: "1.92", posicao: "Central", imagem: "https://volleybox.net/media/upload/players/1739884967KUnk6.png" },
    
        { nome: "Cansu Ozbay", pais: "Turquia", ondeJoga: "Turquia", clube: "VakifBank", idade: "28", altura: "1.82", posicao: "Levantadora", imagem: "https://volleybox.net/media/upload/players/1726866229UWUn4.png" },
    
        { nome: "Melissa Vargas", pais: "Turquia", ondeJoga: "Turquia", clube: "Fenerbace", idade: "25", altura: "1.96", posicao: "Oposta", imagem: "https://volleybox.net/media/upload/players/1738932729Uk3Jh.png" },

        
            { nome: "Hande Baladin", pais: "Turquia", ondeJoga: "Turquia", clube: "Eczacibasi", idade: "27", altura: "1.90", posicao: "Ponteira", imagem: "https://volleybox.net/media/upload/players/1739884785qML9P.png" },
        
            { nome: "Eda Erden", pais: "Turquia", ondeJoga: "Turquia", clube: "Fenerbace", idade: "37", altura: "1.88", posicao: "Central", imagem: "https://volleybox.net/media/upload/players/1738933514iLO2P.png" },
        
            { nome: "Zehra Gunes", pais: "Turquia", ondeJoga: "Turquia", clube: "VakifBank", idade: "25", altura: "1.98", posicao: "Central", imagem: "https://volleybox.net/media/upload/players/17398859549Yw9Y.png" },
        
            { nome: "Gizem Orge", pais: "Turquia", ondeJoga: "Turquia", clube: "Fenerbace", idade: "31", altura: "1.70", posicao: "Libero", imagem: "https://volleybox.net/media/upload/players/17274772019yO4y.png" },
        
            { nome: "Jordyn Poulter", pais: "Estados Unidos", ondeJoga: "Estados Unidos", clube: "LOVB Salt Lake", idade: "27", altura: "1.88", posicao: "Levantadora", imagem: "https://volleybox.net/media/upload/players/1723644745Kz7Fh.png" },
        
            { nome: "Jordan Larson", pais: "Estados Unidos", ondeJoga: "Estados Unidos", clube: "LOVB Omaha", idade: "38", altura: "1.88", posicao: "Ponteira", imagem: "https://volleybox.net/media/upload/players/1737890292qerb2.png" },
        
            { nome: "Annie Drews", pais: "Estados Unidos", ondeJoga: "Estados Unidos", clube: "LOVB Madison", idade: "31", altura: "1.95", posicao: "Oposta", imagem: "https://volleybox.net/media/upload/players/1734407033f4Urt.png" },
        
            { nome: "Haleigh Washington", pais: "Estados Unidos", ondeJoga: "Estados Unidos", clube: "LOVB Salt Lake", idade: "29", altura: "1.90", posicao: "Central", imagem: "https://volleybox.net/media/upload/players/1723644867ydr0F.png" },
        
            { nome: "Jordan Thompson", pais: "Estados Unidos", ondeJoga: "Estados Unidos", clube: "LOVB Houston", idade: "27", altura: "1.93", posicao: "Oposta", imagem: "https://volleybox.net/media/upload/players/1734748229Jk2Xc.png" },
        
            { nome: "Chiaka Ogbogu", pais: "Estados Unidos", ondeJoga: "Estados Unidos", clube: "LOVB Austin", idade: "29", altura: "1.88", posicao: "Central", imagem: "https://volleybox.net/media/upload/players/1737198929Kba91.png" },
        
            { nome: "Kathryn Plummer", pais: "Estados Unidos", ondeJoga: "Turquia", clube: "Eczacibasi", idade: "26", altura: "1.96", posicao: "Ponteira", imagem: "https://volleybox.net/media/upload/players/17398848272D1FA.png" },
        
            { nome: "Joanna Wolosz", pais: "Polônia", ondeJoga: "Itália", clube: "Conegliano", idade: "34", altura: "1.81", posicao: "Levantadora", imagem: "https://volleybox.net/media/upload/players/1728697659ukz5S.png" },
        
            { nome: "Magdalena Stysiak", pais: "Polônia", ondeJoga: "Turquia", clube: "Fenerbace", idade: "24", altura: "2.03", posicao: "Oposta", imagem: "https://volleybox.net/media/upload/players/1738932544tt6EO.png" },
        
            { nome: "Martina Lukasik", pais: "Polônia", ondeJoga: "Itália", clube: "Conegliano", idade: "25", altura: "1.89", posicao: "Ponteira", imagem: "https://volleybox.net/media/upload/players/1731510987O6pvv.png" },
        
            { nome: "Ting Zhu", pais: "China", ondeJoga: "Itália", clube: "Conegliano", idade: "39", altura: "1.98", posicao: "Ponteira", imagem: "https://volleybox.net/media/upload/players/1732980695LpD5q.png" },
        
            { nome: "Yingying Li", pais: "China", ondeJoga: "China", clube: "Tianjin", idade: "25", altura: "1.95", posicao: "Ponteira", imagem: "https://volleybox.net/media/upload/players/17398884490QvfQ.png" },
        
            { nome: "Anne Buijs", pais: "Holanda", ondeJoga: "Itália", clube: "Chieri", idade: "33", altura: "1.91", posicao: "Ponteira", imagem: "https://volleybox.net/media/upload/players/1731435255E7ZFV.png" },
        
            { nome: "Nika Daalderop", pais: "Holanda", ondeJoga: "Itália", clube: "Milano", idade: "26", altura: "1.89", posicao: "Ponteira", imagem: "https://volleybox.net/media/upload/players/17283618414ynFX.png" },
        
            { nome: "Arina Fedorovtseva", pais: "Rússia", ondeJoga: "Turquia", clube: "Fenerbace", idade: "21", altura: "1.95", posicao: "Ponteira", imagem: "https://volleybox.net/media/upload/players/1716748490cJX8t.png" }
        
        
    



];
