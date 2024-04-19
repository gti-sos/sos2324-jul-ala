const API_BASE_ALA = "/api/v2/trimestralpib_stats";

let initialData = [
    { country: "Spain", date: "01/12/2018", trimestral_pib: "305.818 M€", trimestral_variable_pib: "0,70%", annual_variable_pib: "2,20%", year: 2018 },
    { country: "Germany", date: "01/12/2018", trimestral_pib: "854.124 M€", trimestral_variable_pib: "0,90%", annual_variable_pib: "0,10%", year: 2018 },
    { country: "United Kingdom", date: "01/12/2018", trimestral_pib: "610.918 M€", trimestral_variable_pib: "0,20%", annual_variable_pib: "1,20%", year: 2018 },
    { country: "France", date: "01/12/2018", trimestral_pib: "598.352 M€", trimestral_variable_pib: "0,50%", annual_variable_pib: "1,50%", year: 2018 },
    { country: "Italy", date: "01/12/2018", trimestral_pib: "444.875 M€", trimestral_variable_pib: "0,30%", annual_variable_pib: "0,30%", year: 2018 },
    { country: "Portugal", date: "01/12/2018", trimestral_pib: "51.989 M€", trimestral_variable_pib: "0,60%", annual_variable_pib: "2,70%", year: 2018 },
    { country: "Euro Zone", date: "01/12/2018", trimestral_pib: "2.938.241 M€", trimestral_variable_pib: "0,70%", annual_variable_pib: "1,20%", year: 2018 },
    { country: "United States", date: "01/12/2018", trimestral_pib: "4.581.625 M€", trimestral_variable_pib: "0,10%", annual_variable_pib: "2,10%", year: 2018 },
    { country: "Japan", date: "01/12/2018", trimestral_pib: "1.074.283 M€", trimestral_variable_pib: "-0,10%", annual_variable_pib: "-0,30%", year: 2018 },
    { country: "China", date: "01/12/2018", trimestral_variable_pib: "1,30%", annual_variable_pib: "6,50%", year: 2018 },
    { country: "Argentina", date: "01/12/2018", trimestral_pib: "99.846 M€", trimestral_variable_pib: "-1,60%", annual_variable_pib: "-6,40%", year: 2018 },
    { country: "Austria", date: "01/12/2018", trimestral_pib: "98.065 M€", trimestral_variable_pib: "1,30%", annual_variable_pib: "2,60%", year: 2018 },
    { country: "Australia", date: "01/12/2018", trimestral_pib: "303.808 M€", trimestral_variable_pib: "0,20%", annual_variable_pib: "2,50%", year: 2018 },
    { country: "Belgium", date: "01/12/2018", trimestral_pib: "117.271 M€", trimestral_variable_pib: "1,00%", annual_variable_pib: "2,20%", year: 2018 },
    { country: "Bulgary", date: "01/12/2018", trimestral_pib: "14.293 M€", trimestral_variable_pib: "0,90%", annual_variable_pib: "3,30%", year: 2018 },
    { country: "Brasil", date: "01/12/2018", trimestral_pib: "411.393 M€", trimestral_variable_pib: "-0,40%", annual_variable_pib: "1,10%", year: 2018 },
    { country: "Canada", date: "01/12/2018", trimestral_pib: "371.308 M€", trimestral_variable_pib: "0,20%", annual_variable_pib: "2,70%", year: 2018 },
    { country: "Swiss", date: "01/12/2018", trimestral_pib: "157.082 M€", trimestral_variable_pib: "0,20%", annual_variable_pib: "2,00%", year: 2018 },
    { country: "Chile", date: "01/12/2018", trimestral_pib: "62.299 M€", trimestral_variable_pib: "1,20%", annual_variable_pib: "3,30%", year: 2018 },
    { country: "Colombia", date: "01/12/2018", trimestral_pib: "69.771 M€", trimestral_variable_pib: "0,10%", annual_variable_pib: "2,80%", year: 2018 },
    { country: "Costa Rica", date: "01/12/2018", trimestral_pib: "13.094 M€", trimestral_variable_pib: "-0,70%", annual_variable_pib: "0,40%", year: 2018 },
    { country: "Cyprus", date: "01/12/2018", trimestral_pib: "5.548 M€", trimestral_variable_pib: "2,30%", annual_variable_pib: "6,30%", year: 2018 },
    { country: "Czechia", date: "01/12/2018", trimestral_pib: "53.419 M€", trimestral_variable_pib: "0,80%", annual_variable_pib: "2,60%", year: 2018 },
    { country: "Denmark", date: "01/12/2018", trimestral_pib: "76.815 M€", trimestral_variable_pib: "0,50%", annual_variable_pib: "2,10%", year: 2018 },
    { country: "Estonia", date: "01/12/2018", trimestral_pib: "6.722 M€", trimestral_variable_pib: "1,20%", annual_variable_pib: "3,60%", year: 2018 },
    { country: "Finland", date: "01/12/2018", trimestral_pib: "58.941 M€", trimestral_variable_pib: "0%", annual_variable_pib: "0,10%", year: 2018 },
    { country: "Greece", date: "01/12/2018", trimestral_pib: "45.158 M€", trimestral_variable_pib: "0,70%", annual_variable_pib: "2,20%", year: 2018 },
    { country: "Croatia", date: "01/12/2018", trimestral_pib: "13.408 M€", trimestral_variable_pib: "0,60%", annual_variable_pib: "3,10%", year: 2018 },
    { country: "Hungary", date: "01/12/2018", trimestral_pib: "34.799 M€", trimestral_variable_pib: "1,00%", annual_variable_pib: "5,30%", year: 2018 }
];




function loadBackendALA_v2(app,db) {
    
  // REDIRECT al portal de documentación
  app.get(API_BASE_ALA + "/docs", (req, res) => {
    res.redirect("https://documenter.getpostman.com/view/26037869/2sA2xh2CNT");
  });

    // GET => Lista todos los datos
    // Permite establecer un periodo con from y to
    // Permite buscar por cualquier parametro con ?parametro=valor
    // Permite paginacion con limit y offset

    app.get(API_BASE_ALA + "/", (req, res) => {
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
    app.get(API_BASE_ALA+"/loadInitialData",(req,res) => {
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
    app.get(API_BASE_ALA + "/:year/:country", (req, res) => {
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
    }),

  // POST => Create a new listing
  app.post(API_BASE_ALA + "/", (req, res) => {

    const newData =  req.body;
    const expectedFields = ["country", "date", "trimestral_pib", "trimestral_variable_pib", "annual_variable_pib", "year"];
    const receivedFields = Object.keys(newData);
    const isValidData = expectedFields.every(field => receivedFields.includes(field));

    if (!isValidData) {
        res.sendStatus(400, "Bad Request"); // Datos inválidos
    } else {
        // Verificar si ya existe un documento con el mismo cci en la base de datos
        db.findOne({ country: newData.country, trimestral_pib: newData.trimestral_pib, trimestral_variable_pib: newData.trimestral_variable_pib, year: newData.year }, (err, existingData) => {
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
});

    // PUT => Can't update root directory
    app.put(API_BASE_ALA + "/", (req,res)=> {
        res.sendStatus(405,"METHOD NOW ALLOWED");
    }),

    // PUT => Update resource by listing_id
    app.put(API_BASE_ALA + "/:country", (req, res) => {

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
     
      app.put(API_BASE_ALA + "/:year/:country", (req, res) => {
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
    app.delete(API_BASE_ALA + "/", (req, res) => {
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
    app.delete(API_BASE_ALA + "/:country", (req, res) => {
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

  

    app.delete(API_BASE_ALA + "/:year/:country", (req, res) => {
        const { year, country } = req.params;
    
        // Verificar si el año tiene un formato válido (cuatro dígitos)
        if (!(/^\d{4}$/.test(year))) {
            return res.status(400).send("Bad Request. Please provide a valid year in YYYY format.");
        }
    
        // Eliminar el documento de la base de datos
        db.remove({ country: country, "date": new RegExp(`^\\d{2}/\\d{2}/${year}$`) }, { multi: true }, (err, numRemoved) => {
            if (err) {
                res.status(500).send("Internal Server Error");
            } else {
                if (numRemoved === 0) {
                    res.status(404).send("RESOURCE NOT FOUND");
                } else {
                    res.status(200).send("Deleted successfully");
                }
            }
        });
    }),
    
    

    // POST => Method not allowed
    app.post(API_BASE_ALA + "/:country", (req, res) => {
    // Devuelve un estado 405 (Método no permitido) con un mensaje explicativo
    res.status(405).send("METHOD NOT ALLOWED. Please use this endpoint to create a new resource without specifying an ID or param.");
    });
};






export {loadBackendALA_v2};