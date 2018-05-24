const funciones = {
    versionActual(req,res){
        res.json({
            versionActual : "1.1.0",
            message : 'There is your version',
            urlandroid : 'https://play.google.com/store/apps/details?id=cl.tecnoandina.casinos.produccion',
            urlios : 'http://juanviera-ios.com'
        })
        return res.end()
    }
}
module.exports = funciones;