const API_BASE_ARM = "/api/v1/manofthematch";
const initialData = [
                {date:"14-06-2018",country:"Russia",Opponent:"Saudi Arabia",GoalScored:"5",BallPossession:"40",attemps:"13",OnTarget:"7",OffTarget:"3",Blocked:"3",Corners:"6"},
                {date:"14-06-2018",country:"Saudi Arabia",Opponent:"Russia",GoalScored:"0",BallPossession:"60",attemps:"6",OnTarget:"0",OffTarget:"3",Blocked:"3",Corners:"2"},
                {date:"15-06-2018",country:"Egypt",Opponent:"Uruguay",GoalScored:"0",BallPossession:"43",attemps:"8",OnTarget:"3",OffTarget:"3",Blocked:"2",Corners:"0"},
                {date:"15-06-2018",country:"Uruguay",Opponent:"Egypt",GoalScored:"1",BallPossession:"57",attemps:"14",OnTarget:"4",OffTarget:"6",Blocked:"4",Corners:"5"},
                {date:"15-06-2018",country:"Morocco",Opponent:"Iran",GoalScored:"0",BallPossession:"64",attemps:"13",OnTarget:"3",OffTarget:"6",Blocked:"4",Corners:"5"},
                {date:"15-06-2018",country:"Iran",Opponent:"Morocco",GoalScored:"1",BallPossession:"36",attemps:"8",OnTarget:"2",OffTarget:"5",Blocked:"1",Corners:"2"},
                {date:"15-06-2018",country:"Portugal",Opponent:"Spain",GoalScored:"3",BallPossession:"39",attemps:"8",OnTarget:"3",OffTarget:"2",Blocked:"3",Corners:"4"},
                {date:"15-06-2018",country:"Spain",Opponent:"Portugal",GoalScored:"3",BallPossession:"61",attemps:"12",OnTarget:"5",OffTarget:"5",Blocked:"2",Corners:"5"},
                {date:"16-06-2018",country:"France",Opponent:"Australia",GoalScored:"2",BallPossession:"51",attemps:"12",OnTarget:"5",OffTarget:"4",Blocked:"3",Corners:"5"},
                {date:"16-06-2018",country:"Australia",Opponent:"France",GoalScored:"1",BallPossession:"49",attemps:"4",OnTarget:"1",OffTarget:"2",Blocked:"1",Corners:"1"},
                {date:"16-06-2018",country:"Argentina",Opponent:"Iceland",GoalScored:"1",BallPossession:"72",attemps:"26",OnTarget:"7",OffTarget:"9",Blocked:"10",Corners:"10"},
                {date:"16-06-2018",country:"Iceland",Opponent:"Argentina",GoalScored:"1",BallPossession:"28",attemps:"9",OnTarget:"3",OffTarget:"5",Blocked:"1",Corners:"2"},
                {date:"16-06-2018",country:"Peru",Opponent:"Denmark",GoalScored:"0",BallPossession:"52",attemps:"18",OnTarget:"6",OffTarget:"7",Blocked:"5",Corners:"3"},
                {date:"16-06-2018",country:"Denmark",Opponent:"Peru",GoalScored:"1",BallPossession:"48",attemps:"10",OnTarget:"3",OffTarget:"5",Blocked:"2",Corners:"7"},
                {date:"17-06-2018",country:"Croatia",Opponent:"Nigeria",GoalScored:"2",BallPossession:"54",attemps:"11",OnTarget:"2",OffTarget:"7",Blocked:"2",Corners:"6"},
                {date:"17-06-2018",country:"Nigeria",Opponent:"Croatia",GoalScored:"0",BallPossession:"46",attemps:"14",OnTarget:"2",OffTarget:"5",Blocked:"7",Corners:"5"},
                {date:"17-06-2018",country:"Costa Rica",Opponent:"Serbia",GoalScored:"0",BallPossession:"50",attemps:"10",OnTarget:"3",OffTarget:"3",Blocked:"4",Corners:"5"},
                {date:"17-06-2018",country:"Serbia",Opponent:"Costa Rica",GoalScored:"1",BallPossession:"50",attemps:"10",OnTarget:"3",OffTarget:"5",Blocked:"2",Corners:"4"},
                {date:"17-06-2018",country:"Germany",Opponent:"Mexico",GoalScored:"0",BallPossession:"60",attemps:"25",OnTarget:"9",OffTarget:"9",Blocked:"7",Corners:"8"},
                {date:"17-06-2018",country:"Mexico",Opponent:"Germany",GoalScored:"1",BallPossession:"40",attemps:"12",OnTarget:"4",OffTarget:"6",Blocked:"2",Corners:"1"},
                {date:"17-06-2018",country:"Brazil",Opponent:"Switzerland",GoalScored:"1",BallPossession:"52",attemps:"20",OnTarget:"4",OffTarget:"9",Blocked:"7",Corners:"7"},
                {date:"17-06-2018",country:"Switzerland",Opponent:"Brazil",GoalScored:"1",BallPossession:"48",attemps:"6",OnTarget:"2",OffTarget:"4",Blocked:"0",Corners:"2"},
                {date:"18-06-2018",country:"Sweden",Opponent:"Korea Republic",GoalScored:"1",BallPossession:"52",attemps:"15",OnTarget:"4",OffTarget:"5",Blocked:"6",Corners:"6"},
                {date:"18-06-2018",country:"Korea Republic",Opponent:"Sweden",GoalScored:"0",BallPossession:"48",attemps:"5",OnTarget:"0",OffTarget:"2",Blocked:"3",Corners:"5"},
                {date:"18-06-2018",country:"Belgium",Opponent:"Panama",GoalScored:"3",BallPossession:"61",attemps:"15",OnTarget:"6",OffTarget:"7",Blocked:"2",Corners:"9"},
                {date:"18-06-2018",country:"Panama",Opponent:"Belgium",GoalScored:"0",BallPossession:"39",attemps:"6",OnTarget:"2",OffTarget:"4",Blocked:"0",Corners:"3"},
                {date:"18-06-2018",country:"Tunisia",Opponent:"England",GoalScored:"1",BallPossession:"41",attemps:"6",OnTarget:"1",OffTarget:"3",Blocked:"2",Corners:"2"},
                {date:"18-06-2018",country:"England",Opponent:"Tunisia",GoalScored:"2",BallPossession:"59",attemps:"17",OnTarget:"7",OffTarget:"7",Blocked:"3",Corners:"7"},
                {date:"19-06-2018",country:"Colombia",Opponent:"Japan",GoalScored:"1",BallPossession:"41",attemps:"8",OnTarget:"3",OffTarget:"1",Blocked:"4",Corners:"3"},
                {date:"19-06-2018",country:"Japan",Opponent:"Colombia",GoalScored:"2",BallPossession:"59",attemps:"14",OnTarget:"6",OffTarget:"5",Blocked:"3",Corners:"6"},
                {date:"19-06-2018",country:"Poland",Opponent:"Senegal",GoalScored:"1",BallPossession:"57",attemps:"10",OnTarget:"4",OffTarget:"5",Blocked:"1",Corners:"3"},
                {date:"19-06-2018",country:"Senegal",Opponent:"Poland",GoalScored:"2",BallPossession:"43",attemps:"8",OnTarget:"2",OffTarget:"4",Blocked:"2",Corners:"3"},
                {date:"19-06-2018",country:"Russia",Opponent:"Egypt",GoalScored:"3",BallPossession:"47",attemps:"11",OnTarget:"3",OffTarget:"5",Blocked:"3",Corners:"7"},
                {date:"19-06-2018",country:"Egypt",Opponent:"Russia",GoalScored:"1",BallPossession:"53",attemps:"13",OnTarget:"1",OffTarget:"8",Blocked:"4",Corners:"4"},
                {date:"20-06-2018",country:"Portugal",Opponent:"Morocco",GoalScored:"1",BallPossession:"47",attemps:"10",OnTarget:"2",OffTarget:"4",Blocked:"4",Corners:"5"},
                {date:"20-06-2018",country:"Morocco",Opponent:"Portugal",GoalScored:"0",BallPossession:"53",attemps:"16",OnTarget:"4",OffTarget:"10",Blocked:"2",Corners:"7"},
                {date:"20-06-2018",country:"Uruguay",Opponent:"Saudi Arabia",GoalScored:"1",BallPossession:"47",attemps:"13",OnTarget:"4",OffTarget:"6",Blocked:"3",Corners:"3"},
                {date:"20-06-2018",country:"Saudi Arabia",Opponent:"Uruguay",GoalScored:"0",BallPossession:"53",attemps:"8",OnTarget:"3",OffTarget:"3",Blocked:"2"},
                {date:"20-06-2018",country:"Iran",Opponent:"Spain",GoalScored:"0",BallPossession:"30",attemps:"5",OnTarget:"0",OffTarget:"5",Blocked:"0",Corners:"2"},
                {date:"20-06-2018",country:"Spain",Opponent:"Iran",GoalScored:"1",BallPossession:"70",attemps:"17",OnTarget:"3",OffTarget:"6",Blocked:"8",Corners:"6"},
                {date:"21-06-2018",country:"Denmark",Opponent:"Australia",GoalScored:"1",BallPossession:"49",attemps:"10",OnTarget:"5",OffTarget:"5",Blocked:"0",Corners:"3"},
                {date:"21-06-2018",country:"Australia",Opponent:"Denmark",GoalScored:"1",BallPossession:"51",attemps:"14",OnTarget:"5",OffTarget:"5",Blocked:"4",Corners:"5"},
                {date:"21-06-2018",country:"France",Opponent:"Peru",GoalScored:"1",BallPossession:"44",attemps:"12",OnTarget:"4",OffTarget:"6",Blocked:"2",Corners:"5"},
                {date:"21-06-2018",country:"Peru",Opponent:"France",GoalScored:"0",BallPossession:"56",attemps:"10",OnTarget:"2",OffTarget:"6",Blocked:"2",Corners:"3"},
                {date:"21-06-2018",country:"Argentina",Opponent:"Croatia",GoalScored:"0",BallPossession:"58",attemps:"10",OnTarget:"3",OffTarget:"3",Blocked:"4",Corners:"5"},
                {date:"21-06-2018",country:"Croatia",Opponent:"Argentina",GoalScored:"3",BallPossession:"42",attemps:"15",OnTarget:"5",OffTarget:"6",Blocked:"4",Corners:"2"},
                {date:"22-06-2018",country:"Brazil",Opponent:"Costa Rica",GoalScored:"2",BallPossession:"66",attemps:"23",OnTarget:"9",OffTarget:"9",Blocked:"5",Corners:"10"},
                {date:"22-06-2018",country:"Costa Rica",Opponent:"Brazil",GoalScored:"0",BallPossession:"34",attemps:"4",OnTarget:"0",OffTarget:"4",Blocked:"0",Corners:"1"},
                {date:"22-06-2018",country:"Nigeria",Opponent:"Iceland",GoalScored:"2",BallPossession:"58",attemps:"16",OnTarget:"4",OffTarget:"6",Blocked:"6",Corners:"6"},
                {date:"22-06-2018",country:"Iceland",Opponent:"Nigeria",GoalScored:"0",BallPossession:"42",attemps:"10",OnTarget:"3",OffTarget:"6",Blocked:"1",Corners:"5"},
                {date:"22-06-2018",country:"Serbia",Opponent:"Switzerland",GoalScored:"1",BallPossession:"42",attemps:"12",OnTarget:"3",OffTarget:"7",Blocked:"2",Corners:"3"},
                {date:"22-06-2018",country:"Switzerland",Opponent:"Serbia",GoalScored:"2",BallPossession:"58",attemps:"20",OnTarget:"5",OffTarget:"8",Blocked:"7",Corners:"7"},
                {date:"23-06-2018",country:"Belgium",Opponent:"Tunisia",GoalScored:"5",BallPossession:"52",attemps:"23",OnTarget:"12",OffTarget:"8",Blocked:"3",Corners:"5"},
                {date:"23-06-2018",country:"Tunisia",Opponent:"Belgium",GoalScored:"2",BallPossession:"48",attemps:"15",OnTarget:"5",OffTarget:"6",Blocked:"4",Corners:"2"},
                {date:"23-06-2018",country:"Korea Republic",Opponent:"Mexico",GoalScored:"1",BallPossession:"41",attemps:"17",OnTarget:"6",OffTarget:"2",Blocked:"9",Corners:"7"},
                {date:"23-06-2018",country:"Mexico",Opponent:"Korea Republic",GoalScored:"2",BallPossession:"59",attemps:"13",OnTarget:"5",OffTarget:"6",Blocked:"2",Corners:"5"},
                {date:"23-06-2018",country:"Germany",Opponent:"Sweden",GoalScored:"2",BallPossession:"71",attemps:"16",OnTarget:"5",OffTarget:"4",Blocked:"7",Corners:"8"},
                {date:"23-06-2018",country:"Sweden",Opponent:"Germany",GoalScored:"1",BallPossession:"29",attemps:"8",OnTarget:"6",OffTarget:"1",Blocked:"1",Corners:"3"},
                {date:"24-06-2018",country:"England",Opponent:"Panama",GoalScored:"6",BallPossession:"58",attemps:"12",OnTarget:"7",OffTarget:"3",Blocked:"2",Corners:"3"},
                {date:"24-06-2018",country:"Panama",Opponent:"England",GoalScored:"1",BallPossession:"42",attemps:"8",OnTarget:"2",OffTarget:"5",Blocked:"1",Corners:"2"},
                {date:"24-06-2018",country:"Japan",Opponent:"Senegal",GoalScored:"2",BallPossession:"54",attemps:"7",OnTarget:"3",OffTarget:"2",Blocked:"2",Corners:"2"}
];
module.exports = (app,db) => {
    // REDIRECT al portal de documentación
  app.get(API_BASE_ARM + "/docs", (req, res) => {
    res.redirect("https://documenter.getpostman.com/view/26189208/2sA2xiVWqq");
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
                    const listingYear = new Date(listing.date).getFullYear();
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
              return res.status(404).send("Not Found");
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
    
            // Eliminar el campo _id de los resultados y enviar la respuesta
            const responseBody = paginatedListings.map((listing) => {
                delete listing._id;
                return listing;
            });
            res.status(200).send(responseBody);
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
          // Construir expresión regular para buscar cualquier fecha dentro del año proporcionado
          const yearRegex = new RegExp(`\\d{2}-\\d{2}-${year}`);
          db.find({ date: { $regex: yearRegex } }, (err, listings) => {
              if (err) {
                  res.sendStatus(500, "INTERNAL ERROR");
              } else {
                  if (listings.length === 0) {
                      res.sendStatus(404, "NOT FOUND");
                  } else {
                      res.status(200).send(JSON.stringify(listings.map(listing => {
                          delete listing._id;
                          return listing;
                      })));
                  }
              }
          });
      }),
      
  
      // GET => Buscar por host_location y year
      app.get(API_BASE_ARM + "/:year/:country", (req, res) => {
        const { year, country } = req.params;
        // Verificar si el año tiene un formato válido (cuatro dígitos)
        if (!(/^\d{4}$/.test(year))) {
        return res.status(400).send("Bad Request. Please provide a valid year in YYYY format.");
        };
        // Parsear el año de la consulta a entero
        const yearInt = parseInt(year);
        // Crear una expresión regular para buscar en el campo date
        const regex = new RegExp(`^\\d{2}-\\d{2}-${yearInt}$`);
        db.find({ country: country, date: { $regex: regex } }, (err, listings) => {
            if (err) {
                res.sendStatus(500, "INTERNAL ERROR");
            } else {
                if (listings.length === 0) {
                    res.sendStatus(404, "RESOURCE NOT FOUND");
                } else {
                    res.status(200).send(JSON.stringify(listings.map((listing => { delete listing._id; return listing; }))));
                }
            }
        });
      }),
      
  
   /* // POST => Create a new listing
    app.post(API_BASE_ARM + "/", (req, res) => {
  
      const newData =  req.body;
      const expectedFields = ["date", "country", "Opponent", "GoalScored", "BallPossession", "attemps", "OnTarget", "OffTarget", "Blocked", "Corners", "Offsides", "FreeKicks", "Saves", "PassAccuracy", "Passes", "DistanceCovered", "FoulsCommitted", "YellowCard", "Yellow_Red", "Red", "ManoftheMatch", "stGoal", "Round", "PSO", "GoalsinPSO", "Owngoals", "OwngoalTime"];
      const receivedFields = Object.keys(newData);
      const isValidData = expectedFields.every(field => receivedFields.includes(field));
  
      if (!isValidData) {
          res.sendStatus(400, "Bad Request"); // Datos inválidos
      } else {
          // Verificar si ya existe un documento con el mismo cci en la base de datos
          db.findOne({ date: newData.date,
            country: newData.country,
            Opponent: newData.Opponent,
            GoalScored: newData.GoalScored,
            BallPossession: newData.BallPossession,
            attemps: newData.attemps,
            OnTarget: newData.OnTarget,
            OffTarget: newData.OffTarget,
            Blocked: newData.Blocked,
            Corners: newData.Corners,
            Offsides: newData.Offsides,
            FreeKicks: newData.FreeKicks,
            Saves: newData.Saves,
            PassAccuracy: newData.PassAccuracy,
            Passes: newData.Passes,
            DistanceCovered: newData.DistanceCovered,
            FoulsCommitted: newData.FoulsCommitted,
            YellowCard: newData.YellowCard,
            Yellow_Red: newData.Yellow_Red,
            Red: newData.Red,
            ManoftheMatch: newData.ManoftheMatch,
            stGoal: newData.stGoal,
            Round: newData.Round,
            PSO: newData.PSO,
            GoalsinPSO: newData.GoalsinPSO,
            Owngoals: newData.Owngoals,
            OwngoalTime: newData.OwngoalTime}, (err, existingData) => {
              if (err) {
                  res.sendStatus(500, "Internal Error"); // Error interno del servidor
              } else {
                  if (existingData) {
                      res.sendStatus(409, "Conflict"); //Datos existentes
                  } else {
                      // Si no existe, insertar el nuevo documento
                      db.insert(newData, (err, insertedData) => {
                          if (err) {
                              res.sendStatus(500, "Internal Error"); // Error interno del servidor
                          } else {
                              res.sendStatus(201, "Created");
                          }
                      });
                  }
              }
          });
      }
  });*/
  app.post(API_BASE_ARM +"/", (req, res) => {
    let report = req.body;
    let object_params = ["date", "country", "Opponent", "GoalScored", "BallPossession", "attemps", "OnTarget", "OffTarget", "Blocked", "Corners"];
    const queryParams = Object.keys(report);
    const missingFields = object_params.filter(field => !queryParams.includes(field));
    if (missingFields.length > 0) {
        return res.status(400).send("Missing fields: " + missingFields.join(", "));
    } else if(queryParams.length !== 10) {
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
  
      // PUT => Update resource by listing_id
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
        // PUT => Update resource by latitude and longitude
        app.put(API_BASE_ARM + "/:manofthematch/:manofthematch_variable", (req, res) => {
          const manofthematch = parseFloat(req.params.Corners);
          const manofthematch_variable = parseFloat(req.params.Blocked);
          let data = req.body;
    
          if (!data || Object.keys(data).length === 0 || data.date !== date || data.country !== country || data.Opponent !== Opponent || data.GoalScored !== GoalScored || data.BallPossession !== BallPossession || data.attempts !== attempts || data.OnTarget !== OnTarget || data.OffTarget !== OffTarget || data.Blocked !== Blocked || data.Corners !== Corners || data.Offsides !== Offsides || data.FreeKicks !== FreeKicks || data.Saves !== Saves || data.PassAccuracy !== PassAccuracy || data.Passes !== Passes || data.DistanceCovered !== DistanceCovered || data.FoulsCommitted !== FoulsCommitted || data.YellowCard !== YellowCard || data.Yellow_Red !== Yellow_Red || data.Red !== Red || data.ManoftheMatch !== ManoftheMatch || data.stGoal !== stGoal || data.Round !== Round || data.PSO !== PSO || data.Goalsin !== Goalsin || data.Owngoals !== Owngoals || data.OwngoalTime !== OwngoalTime) {
              res.sendStatus(400, "BAD REQUEST"); // Datos inválidos
          } else {
              db.update({ manofthematch: manofthematch, manofthematch_variable: manofthematch_variable }, data, { }, (err) => {
                  if (err) {
                      res.sendStatus(500, "Internal Server Error"); // Error interno del servidor
                  }
                  res.sendStatus(200, "Ok"); //Actualizacion correcta
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
  
      // DELETE => Delete specific data by listing_id
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
  
      // DELETE => Delete specific data by latitude and longitude
      app.delete(API_BASE_ARM + "/:manofthematch/:manofthematch_variable", (req, res) => {
      const manofthematch = parseFloat(req.params.manofthematch);
      const manofthematch_variable = parseFloat(req.params.manofthematch_variable);
  
      // Eliminar el documento con la latitud y longitud especificadas de la base de datos
      db.remove({ manofthematch: manofthematch, manofthematch_variable: manofthematch_variable }, {}, (err, numRemoved) => {
          if (err) {
              res.sendStatus(500).send("INTERNAL ERROR");
          } else if (numRemoved === 0) {
              // No se encontró ningún documento con la latitud y longitud especificadas, devolver un error 404 NOT FOUND
              res.sendStatus(404, "NOT FOUND");
          } else {
              // Se eliminó correctamente el documento
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
  

/*

   // GET => Search data by year
   app.get(API_BASE_ALA + "/year/:year", (req, res) => {
    const year = req.params.year;
    // Verificar si el año tiene un formato válido (cuatro dígitos)
    if (!(/^\d{4}$/.test(year))) {
        return res.status(400).send("Bad Request. Please provide a valid year in YYYY format.");
    };
    // Construir expresión regular para buscar cualquier fecha dentro del año proporcionado
    const yearRegex = new RegExp(`\\d{2}/\\d{2}/${year}`);
    db.find({ date: { $regex: yearRegex } }, (err, listings) => {
        if (err) {
            res.sendStatus(500, "INTERNAL ERROR");
        } else {
            if (listings.length === 0) {
                res.sendStatus(404, "NOT FOUND");
            } else {
                res.status(200).send(JSON.stringify(listings.map(listing => {
                    delete listing._id;
                    return listing;
                })));
            }
        }
    });
}),

    // GET => Buscar por host_location y year
    app.get(API_BASE_ARM + "/:year/:country", (req, res) => {
        const { year, country } = req.params;
        // Verificar si el año tiene un formato válido (cuatro dígitos)
        if (!(/^\d{4}$/.test(year))) {
        return res.status(400).send("Bad Request. Please provide a valid year in YYYY format.");
        };
        // Parsear el año de la consulta a entero
        const yearInt = parseInt(year);
        // Crear una expresión regular para buscar en el campo date
        const regex = new RegExp(`^\\d{2}/\\d{2}/${yearInt}$`);
        db.find({ country: country, date: { $regex: regex } }, (err, listings) => {
            if (err) {
                res.sendStatus(500, "INTERNAL ERROR");
            } else {
                if (listings.length === 0) {
                    res.sendStatus(404, "RESOURCE NOT FOUND");
                } else {
                    res.status(200).send(JSON.stringify(listings.map((listing => { delete listing._id; return listing; }))));
                }
            }
        });
      }),
    }*/
  

/*    app.get(API_BASE+"/manofthematch/loadInitialData",(req, res) =>{
        db.find({},(err,data) => {

            if(err){
                res.sendStatus(500, "Internal Error")
            }else{
                if(data.length==0){
                    db.insert(initialData)
                    res.sendStatus(200, "Ok")
                }else{
                    res.sendStatus(200, "Data is already inserted")
                }
            }
        })

    })
    app.get(API_BASE+"/manofthematch",(req,res)=>{

        db.find({},(err,data)=>{

            if(err){
                res.sendStatus(500,"Internal Error");
            }else{
                res.send(JSON.stringify(data.map((c)=>{
                    return c;
                })));  
            }
        });
    });
    app.get(API_BASE + '/manofthematch', (req, res) => {
        const query = req.query;
        const country = query.country;
    
        // Eliminar el campo 'country' de la consulta para que no interfiera
        delete query.country;
        
        // Construir la consulta para buscar solo en el país especificado
        let dbQuery = {};
        if (country) {
            dbQuery = { ...query, country: country };
        }else{
            dbQuery = { ...query };
        }
    
        // Ejecutar la consulta en la base de datos
        db.find(dbQuery, (err, data) => {
            if (err) {
                res.sendStatus(500); // Error interno del servidor
            } else {
                res.send(data); // Devolver los datos encontrados
            }
        });
    });
    //Este get nos permite filtrar por pais
    app.get(API_BASE + '/manofthematch/:country', (req, res) => {
        let country = req.params.country; 
    
        
        db.find({ country: country }, (err, data) => {
            if (err) { 
                res.sendStatus(500); 
            } else {
                if (data.length === 0) {
                    res.sendStatus(404); 
                } else {
                    res.send(data); 
                }
            }
        });
    });
    app.get(API_BASE + '/manofthematch/:attemps', (req, res) => {
        const attemps = parseInt(req.params.attemps);
        console.log(attemps);
    
        
        db.find({ attemps: parseInt(attemps) }, (err, data) => {
            if (err) {
                res.sendStatus(500); 
            } else {
                if (data.length === 0) {
                    res.sendStatus(404);
                } else {
                    res.send(data); 
                }
            }
        });
    });
    app.get(API_BASE + '/manofthematch/:country/:attemps', (req, res) => {
        const country = req.params.country;
        const attemps = parseInt(req.params.attemps);
    
        
        db.find({ country: country, attemps: parseInt(attemps) }, (err, data) => {
            if (err) {
                res.status(500).send("Error interno del servidor");
            } else {
                if (data.length === 0) {
                    res.status(404).send("No se encontraron datos para el país y el año especificados");
                } else {
                    res.send(data);
                }
            }
        });
    });
    //Paginacion 
    app.get(API_BASE + '/manofthematch', (req, res) => {
        const page = parseInt(req.query.page) || 1; // Página solicitada, por defecto 1
        const size = parseInt(req.query.size) || 10; // Tamaño de la página, por defecto 10
    
        const startIndex = (page - 1) * size; // Índice de inicio de la página
        const endIndex = page * size; // Índice de fin de la página
    
        db.find({}, (err, data) => {
            if (err) {
                res.sendStatus(500, "Internal Error");
            } else {
                const paginatedData = data.slice(startIndex, endIndex); // Obtener solo los datos de la página solicitada
                res.send(JSON.stringify(paginatedData));
            }
        });
    });
    //POST - NO PERMITIDO
    app.post(API_BASE + "/manofthematch/:id", (req, res) => {
        const id = req.params.id;
        let data = req.body;
        res.sendStatus(405, "Method Not Allowed");
    });
    //POST - NO PERMITIDO
    app.post(API_BASE + "/manofthematch/:id", (req, res) => {
        const id = req.params.id;
        let data = req.body;
        res.sendStatus(405, "Method Not Allowed");
    });

    app.post(API_BASE+'/manofthematch', (req, res) => {
        let newData = req.body; 
        const expectedFields = ["Date", "country", "Opponent", "GoalScored", "BallPossession", "attemps", "OnTarget", "OffTarget", "Blocked", "Corners", "Offsides", "FreeKicks", "Saves", "PassAccuracy", "Passes", "DistanceCovered", "FoulsCommitted", "YellowCard", "Yellow_Red", "Red", "ManoftheMatch", "stGoal", "Round", "PSO", "Goalsin", "Owngoals", "OwngoalTime"];
        const newDataFields = Object.keys(newData);
        const isValidData = expectedFields.every(field => newDataFields.includes(field));
    
        if (!isValidData) {
            
            res.sendStatus(400); 
            return;
        }
        db.findOne({ 
        Date: newData.Date,
        country: newData.country,
        Opponent: newData.Opponent,
        GoalScored: newData.GoalScored,
        BallPossession: newData.BallPossession,
        attemps: newData.attemps,
        OnTarget: newData.OnTarget,
        OffTarget: newData.OffTarget,
        Blocked: newData.Blocked,
        Corners: newData.Corners,
        Offsides: newData.Offsides,
        FreeKicks: newData.FreeKicks,
        Saves: newData.Saves,
        PassAccuracy: newData.PassAccuracy,
        Passes: newData.Passes,
        DistanceCovered: newData.DistanceCovered,
        FoulsCommitted: newData.FoulsCommitted,
        YellowCard: newData.YellowCard,
        Yellow_Red: newData.Yellow_Red,
        Red: newData.Red,
        ManoftheMatch: newData.ManoftheMatch,
        stGoal: newData.stGoal,
        Round: newData.Round,
        PSO: newData.PSO,
        GoalsinPSO: newData.GoalsinPSO,
        Owngoals: newData.Owngoals,
        OwngoalTime: newData.OwngoalTime
    },
     (err, existingData) => {
            if (err) {
               
                res.sendStatus(500); 
            } else {
                if (existingData) {
                   
                    res.sendStatus(409); 
                } else {
                    
                    db.insert(newData, (err, insertedData) => {
                        if (err) {
                            
                            res.sendStatus(500); 
                        } else {
                          
                            res.sendStatus(201); 
                        }
                    });
                }
            }
        });
    });

    //PUT - NO PERMITIDO
    app.put(API_BASE + "/manofthematch", (req, res) => {
        let data = req.body;
        res.sendStatus(405, "Method not allowed");
    });

    app.put(API_BASE+'/manofthematch/:id', (req, res) => {
        let resourceIdFromURL = req.params.id; 
        let updatedData = req.body; 
        const expectedFields = ["Date", "country", "Opponent", "GoalScored", "BallPossession", "attemps", "OnTarget", "OffTarget", "Blocked", "Corners", "Offsides", "FreeKicks", "Saves", "PassAccuracy", "Passes", "DistanceCovered", "FoulsCommitted", "YellowCard", "Yellow_Red", "Red", "ManoftheMatch", "stGoal", "Round", "PSO", "Goalsin", "Owngoals", "OwngoalTime"];
        const updatedDataFields = Object.keys(updatedData);
        const isValidData = expectedFields.every(field => updatedDataFields.includes(field));
    
        if (!isValidData) {
         
            res.sendStatus(400); 
            return;
        }
    
        if (resourceIdFromURL !== updatedData._id) {
            
            res.sendStatus(400); 
        } else {
           
            db.update({ _id: resourceIdFromURL }, updatedData, {}, (err, numReplaced) => {
                if (err) {
                    
                    res.sendStatus(500); 
                } else {
                    if (numReplaced === 0) {
                        
                        res.sendStatus(404); 
                    } else {
                        
                        res.sendStatus(200); 
                    }
                }
            });
        }
    });
    app.delete(API_BASE + "/manofthematch", (req, res) => {

        db.remove({}, { multi: true }, (err, numRemoved) => { 
            if (err) {
                res.sendStatus(500, "Internal Error"); 
                return;
            } else {
                if (numRemoved >= 1) {
                    res.sendStatus(200, "Ok"); 
                } else {
                    res.sendStatus(404, "Not found"); 
                }
            }
        });
    });
    app.delete(API_BASE+'/manofthematch/:id', (req, res) => {
        let resourceId = req.params.id; 
    
       
        db.remove({ _id: resourceId }, {}, (err, numRemoved) => {
            if (err) {
                
                res.sendStatus(500); 
            } else {
                if (numRemoved === 0) {
                    
                    res.sendStatus(404); 
                } else {
                    
                    res.sendStatus(200); 
                }
            }
        });
    });*/
