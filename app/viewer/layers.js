
    
exports.components = [
    'html',
    'header',

    'layers',

    'footer',
    'tail',
]


exports.datas = async function(cnf, ctx)
{
    // let data_types = await ddd.getTypes()
    
    return {
        // isMobile: types.isMobile(ctx.req),
        // numToThousands: utilnumber.numToThousands,
        title: "Hacash Layers - Hacash DAO"
    }
}

    