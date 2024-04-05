const API_BASE_ARM = "/api/v2/manofthematch";

const initialData = [
    {year:2018, date:"14/06/2018",country:"Saudi Arabia",Opponent:"Russia",GoalScored:"0",BallPossession:"60",attemps:"6",OnTarget:"0",OffTarget:"3",Blocked:"3",Corners:"2"},
    {year:2018, date:"15/06/2018",country:"Egypt",Opponent:"Uruguay",GoalScored:"0",BallPossession:"43",attemps:"8",OnTarget:"3",OffTarget:"3",Blocked:"2",Corners:"0"},
    {year:2018, date:"15/06/2018",country:"Uruguay",Opponent:"Egypt",GoalScored:"1",BallPossession:"57",attemps:"14",OnTarget:"4",OffTarget:"6",Blocked:"4",Corners:"5"},
    {year:2018, date:"15/06/2018",country:"Morocco",Opponent:"Iran",GoalScored:"0",BallPossession:"64",attemps:"13",OnTarget:"3",OffTarget:"6",Blocked:"4",Corners:"5"},
    {year:2018, date:"15/06/2018",country:"Iran",Opponent:"Morocco",GoalScored:"1",BallPossession:"36",attemps:"8",OnTarget:"2",OffTarget:"5",Blocked:"1",Corners:"2"},
    {year:2018, date:"15/06/2018",country:"Portugal",Opponent:"Spain",GoalScored:"3",BallPossession:"39",attemps:"8",OnTarget:"3",OffTarget:"2",Blocked:"3",Corners:"4"},
    {year:2018, date:"15/06/2018",country:"Spain",Opponent:"Portugal",GoalScored:"3",BallPossession:"61",attemps:"12",OnTarget:"5",OffTarget:"5",Blocked:"2",Corners:"5"},
    {year:2018, date:"16/06/2018",country:"Australia",Opponent:"France",GoalScored:"1",BallPossession:"49",attemps:"4",OnTarget:"1",OffTarget:"2",Blocked:"1",Corners:"1"},
    {year:2018, date:"16/06/2018",country:"Australia",Opponent:"France",GoalScored:"1",BallPossession:"49",attemps:"4",OnTarget:"1",OffTarget:"2",Blocked:"1",Corners:"1"},
    {year:2018, date:"16/06/2018",country:"France",Opponent:"Australia",GoalScored:"2",BallPossession:"51",attemps:"12",OnTarget:"5",OffTarget:"4",Blocked:"3",Corners:"5"},
    {year:2018, date:"16/06/2018",country:"Australia",Opponent:"France",GoalScored:"1",BallPossession:"49",attemps:"4",OnTarget:"1",OffTarget:"2",Blocked:"1",Corners:"1"},
    {year:2018, date:"16/06/2018",country:"Argentina",Opponent:"Iceland",GoalScored:"1",BallPossession:"72",attemps:"26",OnTarget:"7",OffTarget:"9",Blocked:"10",Corners:"10"},
    {year:2018, date:"16/06/2018",country:"Iceland",Opponent:"Argentina",GoalScored:"1",BallPossession:"28",attemps:"9",OnTarget:"3",OffTarget:"5",Blocked:"1",Corners:"2"},
    {year:2018, date:"16/06/2018",country:"Peru",Opponent:"Denmark",GoalScored:"0",BallPossession:"52",attemps:"18",OnTarget:"6",OffTarget:"7",Blocked:"5",Corners:"3"},
    {year:2018, date:"16/06/2018",country:"Denmark",Opponent:"Peru",GoalScored:"1",BallPossession:"48",attemps:"10",OnTarget:"3",OffTarget:"5",Blocked:"2",Corners:"7"},
    {year:2018, date:"17/06/2018",country:"Croatia",Opponent:"Nigeria",GoalScored:"2",BallPossession:"54",attemps:"11",OnTarget:"2",OffTarget:"7",Blocked:"2",Corners:"6"},
    {year:2018, date:"17/06/2018",country:"Nigeria",Opponent:"Croatia",GoalScored:"0",BallPossession:"46",attemps:"14",OnTarget:"2",OffTarget:"5",Blocked:"7",Corners:"5"},
    {year:2018, date:"17/06/2018",country:"Costa Rica",Opponent:"Serbia",GoalScored:"0",BallPossession:"50",attemps:"10",OnTarget:"3",OffTarget:"3",Blocked:"4",Corners:"5"},
    {year:2018, date:"17/06/2018",country:"Serbia",Opponent:"Costa Rica",GoalScored:"1",BallPossession:"50",attemps:"10",OnTarget:"3",OffTarget:"5",Blocked:"2",Corners:"4"},
    {year:2018, date:"17/06/2018",country:"Germany",Opponent:"Mexico",GoalScored:"0",BallPossession:"60",attemps:"25",OnTarget:"9",OffTarget:"9",Blocked:"7",Corners:"8"},
    {year:2018, date:"17/06/2018",country:"Mexico",Opponent:"Germany",GoalScored:"1",BallPossession:"40",attemps:"12",OnTarget:"4",OffTarget:"6",Blocked:"2",Corners:"1"},
    {year:2018, date:"17/06/2018",country:"Brazil",Opponent:"Switzerland",GoalScored:"1",BallPossession:"52",attemps:"20",OnTarget:"4",OffTarget:"9",Blocked:"7",Corners:"7"},
    {year:2018, date:"17/06/2018",country:"Switzerland",Opponent:"Brazil",GoalScored:"1",BallPossession:"48",attemps:"6",OnTarget:"2",OffTarget:"4",Blocked:"0",Corners:"2"},
    {year:2018, date:"18/06/2018",country:"Sweden",Opponent:"Korea Republic",GoalScored:"1",BallPossession:"52",attemps:"15",OnTarget:"4",OffTarget:"5",Blocked:"6",Corners:"6"},
    {year:2018, date:"18/06/2018",country:"Korea Republic",Opponent:"Sweden",GoalScored:"0",BallPossession:"48",attemps:"5",OnTarget:"0",OffTarget:"2",Blocked:"3",Corners:"5"},
    {year:2018, date:"18/06/2018",country:"Belgium",Opponent:"Panama",GoalScored:"3",BallPossession:"61",attemps:"15",OnTarget:"6",OffTarget:"7",Blocked:"2",Corners:"9"},
    {year:2018, date:"18/06/2018",country:"Panama",Opponent:"Belgium",GoalScored:"0",BallPossession:"39",attemps:"6",OnTarget:"2",OffTarget:"4",Blocked:"0",Corners:"3"},
];




function loadBackendARM_v2(app,db) {
    // REDIRECT al portal de documentación
  app.get(API_BASE_ARM + "/docs", (req, res) => {
    res.redirect("https://documenter.getpostman.com/view/26189208/2sA35K31w9");
  });
 // GET => Lista todos los datos
    // Permite establecer un periodo con from y to
    // Permite buscar por cualquier parametro con ?parametro=valor
    // Permite paginacion con limit y offset

    app.get(API_BASE_ARM + "/", (req, res) => {
        const { from, to, limit, offset, ...queryParams } = req.query;
    
        // Verifica si hay parámetros 'from' y 'to'
        if (from !== undefined && to !== undefined) {
          const fromYear = parseInt(from);
          const toYear = parseInt(to);
          
          if (isNaN(fromYear) || isNaN(toYear)) {
              return res.status(400).send("Invalid year format. Please provide valid year values.");
          }
     
            // Filtra los resultados dentro del rango de años especificado
            db.find({}, (err, listings) => {
                if (err) {
                    return res.status(500).send("Internal Server Error");
                }
    
                const filteredListings = listings.filter(listing => {
                    const listingYear = new Date(listing.date).getFullYear;
                    return listingYear >= fromYear && listingYear <= toYear;
                });
    
                // Aplicar paginación si los parámetros limit y offset están presentes
                let paginatedListings = filteredListings;
                if (limit !== undefined) {
                    const limitNum = parseInt(limit);
                    if (offset !== undefined) {
                        const offsetNum = parseInt(offset);
                        paginatedListings = filteredListings.slice(offsetNum, offsetNum + limitNum);
                    } else {
                        paginatedListings = filteredListings.slice(0, limitNum);
                    }
                }
    
                // Eliminar el campo _id de los resultados y enviar la respuesta
                const responseBody = paginatedListings.map((listing) => {
                    delete listing._id;
                    return listing;
                });
                res.status(200).send(responseBody);
            });
        } else if (Object.keys(queryParams).length === 0) {
            // No hay parámetros de consulta, devolver todos los recursos
            db.find({}, handleDbResponse);
        } else {
            // Hay parámetros de consulta, filtrar por esos parámetros
           
            db.find(queryParams, handleDbResponse);
        }
    
        function handleDbResponse(err, listings) {
            if (err) {
                return res.status(500).send("Internal Server Error");
            }
  
             // Verificar si hay resultados después de la filtración
          if (listings.length === 0) {
              return res.status(404).send("Database is empty");
          }
    
            // Aplicar paginación si los parámetros limit y offset están presentes
            let paginatedListings = listings;
            if (limit !== undefined) {
                const limitNum = parseInt(limit);
                if (offset !== undefined) {
                    const offsetNum = parseInt(offset);
                    paginatedListings = listings.slice(offsetNum, offsetNum + limitNum);
                } else {
                    paginatedListings = listings.slice(0, limitNum);
                }
            }
    
            // Eliminar el campo _id de los resultados si es una colección
            // o mantenerlo si es un recurso individual
            let responseBody;
            if (from !== undefined && to !== undefined || Object.keys(queryParams).length === 0) {
                responseBody = paginatedListings.map((listing) => {
                    delete listing._id;
                    return listing;
                });
            } else {
                // Si es un recurso individual, mantener el campo _id
                responseBody = paginatedListings.map((listing) => {
                    const { _id, ...rest } = listing;
                    return rest;
                });
            }
            // Devolver un array si es una colección, o un objeto si es un recurso individual
            if (from !== undefined && to !== undefined || Object.keys(queryParams).length === 0) {
                res.status(200).send(responseBody);
            } else {
                res.status(200).send(responseBody[0]);
            }
        }
    });
    
      // GET => loadInitialData (al hacer un GET cree 10 o más datos en el array de NodeJS si está vacío)
      app.get(API_BASE_ARM+"/loadInitialData",(req,res) => {
        db.find({},(err,listings) => {
          if(err){
            res.sendStatus(500, "INTERNAL ERROR");
          }; 
          if (listings.length === 0) {
            db.insert(initialData, (err,listings) =>{
              if(err){
                console.error("Error al insertar datos iniciales:", err);
                res.sendStatus(500, "INTERNAL ERROR");
              } else {
                console.log("Database is empty.");
                console.log("Adding initial data.");
                res.sendStatus(201, "DATA CREATED");
              }
            });
          } else {
            console.log("Database already contains data, initial data won't be loaded again.");
            res.sendStatus(200, "OK");
          }
        }); 
      }),
  
      // GET => Search data by year
      app.get(API_BASE_ARM + "/year/:year", (req, res) => {
        const year = req.params.year;
        // Verificar si el año tiene un formato válido (cuatro dígitos)
        if (!(/^\d{4}$/.test(year))) {
            return res.status(400).send("Bad Request. Please provide a valid year in YYYY format.");
        };
        db.find({ year: parseInt(year) }, (err, listings) => {
            if (err) {
                res.sendStatus(500, "INTERNAL ERROR");
            } else {
                if (listings.length === 0) {
                    res.sendStatus(404, "NOT FOUND");
                } else {
                    res.status(200).send(JSON.stringify(listings.map((listing => { delete listing._id; return listing; }))));
                }
            }
        });
    });
    // GET => Buscar por año y país
    app.get(API_BASE_ARM + "/:year/:country", (req, res) => {
        const { year, country } = req.params;
        
        // Verificar si el año tiene un formato válido (cuatro dígitos)
        if (!(/^\d{4}$/.test(year))) {
            return res.status(400).send("Bad Request. Please provide a valid year in YYYY format.");
        }

        // Convertir el año a entero
        const yearInt = parseInt(year);

        // Realizar la búsqueda en la base de datos
        db.find({ year: yearInt, country: country }, (err, listings) => {
            if (err) {
                return res.status(500).send("INTERNAL ERROR");
            } else {
                if (listings.length === 0) {
                    return res.status(404).send("NOT FOUND");
                } else {
                    // Eliminar el campo _id de los resultados
                    const responseBody = listings.map((listing) => {
                        delete listing._id;
                        return listing;
                    });
                    // Devolver un array si es una colección
                    if (responseBody.length > 1) {
                        return res.status(200).send(responseBody);
                    } else {
                        // Devolver un objeto si es un recurso concreto
                        return res.status(200).send(responseBody[0]);
                    }
                }
            }
        });
    });
     
  app.post(API_BASE_ARM +"/", (req, res) => {
    let report = req.body;
    let object_params = ["year","date", "country", "Opponent", "GoalScored", "BallPossession", "attemps", "OnTarget", "OffTarget", "Blocked", "Corners"];
    const queryParams = Object.keys(report);
    const missingFields = object_params.filter(field => !queryParams.includes(field));
    if (missingFields.length > 0) {
        return res.status(400).send("Missing fields: " + missingFields.join(", "));
    } else if(queryParams.length !== 11) {
        return res.status(400).send("Incorrect fields size", queryParams.length);
    } else {
        db.find({}, (err, reports) => {
            if(err){
                res.sendStatus(500, "Internal Error");
            } else {
                if(reports.some(r => r.date === report.date && r.country=== report.country)) {
                    res.sendStatus(409, "Conflict");
                } else{
                    db.insert(report);
                    res.sendStatus(201, "Data Created");
                }
            }
        })
    }
});
  
      // PUT => Can't update root directory
      app.put(API_BASE_ARM + "/", (req,res)=> {
          res.sendStatus(405,"METHOD NOW ALLOWED");
      }),
  
      // PUT => Update resource by country
      app.put(API_BASE_ARM + "/:country", (req, res) => {
  
        const country = req.params.country;
        let data = req.body;
  
        if (!data || Object.keys(data).length === 0 || data.country !== country) {
            res.sendStatus(400, "BAD REQUEST"); // Datos inválidos
        } else {
            db.update({ country: country }, data, { }, (err) => {
                if (err) {
                    res.sendStatus(500, "Internal Server Error"); // Error interno del servidor
                }
                res.sendStatus(200, "Ok"); //Actualizacion correcta
            });
        }
    }),
    // PUT => Update resource by year and country
    app.put(API_BASE_ARM + "/:year/:country", (req, res) => {
        const year = parseInt(req.params.year);
        const country = req.params.country;
        let data = req.body;

        // Verificar si el año tiene un formato válido (cuatro dígitos)
        if (!(/^\d{4}$/.test(year))) {
            return res.status(400).send("Bad Request. Please provide a valid year in YYYY format.");
        }

        if (!data || Object.keys(data).length === 0 || data.year !== year || data.country !== country) {
            res.sendStatus(400, "BAD REQUEST"); // Invalid data
        } else {
            db.update({ year: year, country: country }, data, { }, (err) => {
                if (err) {
                    res.sendStatus(500, "Internal Server Error"); 
                }
                res.sendStatus(200, "Ok"); 
            });
        }
    }),
  
      // DELETE => Delete all data
      app.delete(API_BASE_ARM + "/", (req, res) => {
        db.remove({}, { multi: true }, (err, numRemoved) => { // Borrar todo la base de datos
          if (err) {
              res.sendStatus(500, "Internal Error"); // Error interno del servidor
              return;
          } else {
              if (numRemoved >= 1) {
                  res.sendStatus(200, "Ok"); // Todos los datos han sido eliminados correctamente
              } else {
                  res.sendStatus(404, "Not found"); // No se encontraron datos para eliminar
              }
          }
      });
    }),
  
      // DELETE => Delete specific data by country
      app.delete(API_BASE_ARM + "/:country", (req, res) => {
        const country = req.params.country;
    
        // Eliminar el documento con el listing_id especificado de la base de datos
        db.remove({ country: country }, {}, (err, numRemoved) => {
            if (err) {
                res.sendStatus(500).send("INTERNAL ERROR");
            } else if (numRemoved === 0) {
                // No se encontró ningún documento con el listing_id especificado, devolver un error 404 NOT FOUND
                res.sendStatus(404, "NOT FOUND");
            } else {
                // Se eliminó correctamente el documento
                res.sendStatus(200, "OK");
            }
        });
      }),
      // DELETE => Delete specific data by year and country
    app.delete(API_BASE_ARM + "/:year/:country", (req, res) => {
        const year = parseInt(req.params.year);
        const country = req.params.country;
        
        // Verificar si el año tiene un formato válido (cuatro dígitos)
        if (!(/^\d{4}$/.test(year))) {
            return res.status(400).send("Bad Request. Please provide a valid year in YYYY format.");
        }

        db.remove({ year: year, country: country }, {}, (err, numRemoved) => {
            if (err) {
                res.sendStatus(500).send("INTERNAL ERROR");
            } else if (numRemoved === 0) {
                // Parameters not found
                res.sendStatus(404, "NOT FOUND");
            } else {
                // All good
                res.sendStatus(200, "OK");
            }
        });
    }),
  
      // POST => Method not allowed
      app.post(API_BASE_ARM + "/:country", (req, res) => {
      // Devuelve un estado 405 (Método no permitido) con un mensaje explicativo
      res.status(405).send("METHOD NOT ALLOWED. Please use this endpoint to create a new resource without specifying an ID or param.");
      });
  };
  

export {loadBackendARM_v2};