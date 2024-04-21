const API_BASE_AAF = "/api/v2/economicfreedom_stats";

let initialData = [
    { country: "Hong Kong SAR, China", year: 2017, overallScore: 9.07, sizeOfGovernment: 9.57, legalSystemsAndPropertyRight: 8.16, soundMoney: 9.63, freedomToTradeInternationally: 9.60, regulation: 9.40 },
    { country: "Singapore", year: 2016, overallScore: 8.82, sizeOfGovernment: 7.52, legalSystemsAndPropertyRight: 8.36, soundMoney: 9.85, freedomToTradeInternationally: 9.55, regulation: 7.79 },
    { country: "New Zealand", year: 2011, overallScore: 8.72, sizeOfGovernment: 6.64, legalSystemsAndPropertyRight: 9.17, soundMoney: 9.53, freedomToTradeInternationally: 8.95, regulation: 9.32 },
    { country: "Switzerland", year: 2015, overallScore: 8.57, sizeOfGovernment: 7.72, legalSystemsAndPropertyRight: 8.94, soundMoney: 9.88, freedomToTradeInternationally: 8.08, regulation: 4.23 },
    { country: "United States", year: 2011, overallScore: 8.46, sizeOfGovernment: 7.36, legalSystemsAndPropertyRight: 8.01, soundMoney: 9.77, freedomToTradeInternationally: 8.19, regulation: 2.98 },
    { country: "Australia", year: 2001, overallScore: 8.29, sizeOfGovernment: 6.77, legalSystemsAndPropertyRight: 8.56, soundMoney: 9.58, freedomToTradeInternationally: 8.11, regulation: 8.41 },
    { country: "United Kingdom", year: 2002, overallScore: 8.28, sizeOfGovernment: 6.56, legalSystemsAndPropertyRight: 8.23, soundMoney: 9.68, freedomToTradeInternationally: 8.64, regulation: 6.28 },
    { country: "Denmark", year: 2017, overallScore: 8.22, sizeOfGovernment: 5.14, legalSystemsAndPropertyRight: 8.97, soundMoney: 9.68, freedomToTradeInternationally: 8.86, regulation: 8.43 },
    { country: "Canada", year: 2017, overallScore: 8.22, sizeOfGovernment: 6.66, legalSystemsAndPropertyRight: 8.38, soundMoney: 9.57, freedomToTradeInternationally: 8.12, regulation: 5.37 },
    { country: "Ireland", year: 2019, overallScore: 8.18, sizeOfGovernment: 6.44, legalSystemsAndPropertyRight: 7.90, soundMoney: 9.28, freedomToTradeInternationally: 8.92, regulation: 8.33 },
    { country: "Estonia", year: 2010, overallScore: 8.11, sizeOfGovernment: 6.40, legalSystemsAndPropertyRight: 7.84, soundMoney: 9.08, freedomToTradeInternationally: 8.93, regulation: 2.31 },
    { country: "Luxembourg", year: 2010, overallScore: 8.11, sizeOfGovernment: 5.76, legalSystemsAndPropertyRight: 8.61, soundMoney: 9.17, freedomToTradeInternationally: 8.86, regulation: 6.14 },
    { country: "Chile", year: 2014, overallScore: 8.11, sizeOfGovernment: 8.06, legalSystemsAndPropertyRight: 6.94, soundMoney: 9.66, freedomToTradeInternationally: 8.66, regulation: 7.26 },
    { country: "Iceland", year: 2008, overallScore: 8.07, sizeOfGovernment: 6.20, legalSystemsAndPropertyRight: 8.72, soundMoney: 9.65, freedomToTradeInternationally: 7.98, regulation: 7.82 },
    { country: "Taiwan", year: 2017, overallScore: 8.07, sizeOfGovernment: 7.52, legalSystemsAndPropertyRight: 7.19, soundMoney: 9.75, freedomToTradeInternationally: 8.15, regulation: 6.74 },
    { country: "Lithuania", year: 2011, overallScore: 8.06, sizeOfGovernment: 7.38, legalSystemsAndPropertyRight: 7.29, soundMoney: 9.02, freedomToTradeInternationally: 8.67, regulation: 5.96 },
    { country: "Mauritius", year: 2017, overallScore: 8.05, sizeOfGovernment: 7.92, legalSystemsAndPropertyRight: 6.93, soundMoney: 9.51, freedomToTradeInternationally: 8.75, regulation: 7.15 },
    { country: "Malta", year: 2013, overallScore: 8.04, sizeOfGovernment: 7.05, legalSystemsAndPropertyRight: 6.75, soundMoney: 9.36, freedomToTradeInternationally: 8.93, regulation: 5.11 },
    { country: "Germany", year: 2013, overallScore: 8.04, sizeOfGovernment: 6.07, legalSystemsAndPropertyRight: 8.20, soundMoney: 9.26, freedomToTradeInternationally: 8.65, regulation: 8.03 },
    { country: "Georgia", year: 2017, overallScore: 8.00, sizeOfGovernment: 7.97, legalSystemsAndPropertyRight: 6.21, soundMoney: 8.92, freedomToTradeInternationally: 8.77, regulation: 9.11 },
    { country: "Latvia", year: 2012, overallScore: 8.00, sizeOfGovernment: 7.16, legalSystemsAndPropertyRight: 6.99, soundMoney: 9.90, freedomToTradeInternationally: 8.75, regulation: 8.00 }
];

function loadBackendAAF_v2(app,db) {
    
    // REDIRECT al portal de documentación
    app.get(API_BASE_AAF + "/docs", (req, res) => {
      res.redirect("https://documenter.getpostman.com/view/33041748/2sA35HX19v");
    });


    // GET => Lista todos los datos
    // Permite establecer un periodo con from y to
    // Permite buscar por cualquier parametro con ?parametro=valor
    // Permite paginacion con limit y offset

    app.get(API_BASE_AAF + "/", (req, res) => {
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
                    const listingYear = listing.year;
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
    app.get(API_BASE_AAF+"/loadInitialData",(req,res) => {
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
    app.get(API_BASE_AAF + "/year/:year", (req, res) => {
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
    app.get(API_BASE_AAF + "/:year/:country", (req, res) => {
        const { year, country } = req.params;
  
        const intYear = parseInt(year);
        const Country = country;
  
        // Parsear los parámetros de paginación
        const limit = parseInt(req.query.limit) || 10; // Valor predeterminado: 10
        const offset = parseInt(req.query.offset) || 0; // Valor predeterminado: 0
        db.find({ year: intYear, country: Country })
            .limit(limit)
            .skip(offset)
            .exec((err, listings) => {
                if (err) {
                    res.status(500).send("Internal Error");
                } else {
                    if (listings.length === 0) {
                        res.status(404).send("[]");
                    } else {
                        // Eliminar el campo _id de cada resultado
                        const responseBody = listings.map(listing => {
                            delete listing._id;
                            return listing;
                        })[0];
  
                        // Devolver la lista de resultados
                        return res.status(200).send(responseBody);
                    }
                }
            });
      });


    // POST => Create a new listing
    app.post(API_BASE_AAF + "/", (req, res) => {

        const newData =  req.body;
        const expectedFields = ["country", "year", "overallScore", "sizeOfGovernment", "legalSystemsAndPropertyRight", "soundMoney", "freedomToTradeInternationally", "regulation"];
        const receivedFields = Object.keys(newData);
        const isValidData = expectedFields.every(field => receivedFields.includes(field));

        if (!isValidData) {
            res.sendStatus(400, "Bad Request"); // Invalid data
        } else {
            // Verify if already existing
            db.findOne({ country: newData.country, overallScore: newData.overallScore, sizeOfGovernment: newData.sizeOfGovernment, soundMoney: newData.soundMoney}, (err, existingData) => {
                if (err) {
                    res.sendStatus(500, "Internal Error"); 
                } else {
                    if (existingData) {
                        res.sendStatus(409, "Conflict"); // Already existing data
                    } else {
                        db.insert(newData, (err, insertedData) => {
                            if (err) {
                                res.sendStatus(500, "Internal Error"); 
                            } else {
                                res.sendStatus(201, "Created");
                            }
                        });
                    }
                }
            });
        }
    });


    // PUT => Can't update root directory
    app.put(API_BASE_AAF + "/", (req,res)=> {
        res.sendStatus(405,"METHOD NOW ALLOWED");
    }),


    // PUT => Update resource by country
    app.put(API_BASE_AAF + "/:country", (req, res) => {

        const country = req.params.country;
        let data = req.body;
        
        if (!data || Object.keys(data).length === 0 || data.country !== country) {
            res.sendStatus(400, "BAD REQUEST"); // Invalid data
        } else {
            db.update({ country: country }, data, { }, (err) => {
                if (err) {
                    res.sendStatus(500, "Internal Server Error"); 
                }
                res.sendStatus(200, "Ok"); 
            });
        }
    }),


    // PUT => Update resource by year and country
    app.put(API_BASE_AAF + "/:year/:country", (req, res) => {
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
    app.delete(API_BASE_AAF + "/", (req, res) => {
        db.remove({}, { multi: true }, (err, numRemoved) => { 
            if (err) {
                res.sendStatus(500, "Internal Error"); 
                return;
            } else {
                if (numRemoved >= 1) {
                    res.sendStatus(200, "Ok"); 
                } else {
                    res.sendStatus(404, "Not found"); // Data not found
                }
            }
        });
    }),


    // DELETE => Delete specific data by country
    app.delete(API_BASE_AAF + "/:country", (req, res) => {
        const country = req.params.country;
  
        db.remove({ country: country }, {}, (err, numRemoved) => {
            if (err) {
                res.sendStatus(500).send("INTERNAL ERROR");
            } else if (numRemoved === 0) {
                // Country not found
                res.sendStatus(404, "NOT FOUND");
            } else {
                // All good
                res.sendStatus(200, "OK");
            }
        });
    }),


    // DELETE => Delete specific data by year and country
    app.delete(API_BASE_AAF + "/:year/:country", (req, res) => {
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
    app.post(API_BASE_AAF + "/:country", (req, res) => {
        // Not allowed
        res.status(405).send("METHOD NOT ALLOWED. Please use this endpoint to create a new resource without specifying an ID or param.");
    });
};

export {loadBackendAAF_v2};