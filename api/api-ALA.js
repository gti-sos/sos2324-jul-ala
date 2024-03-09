const API_BASE_ALA = "/api/v1/trimestralpib_stats";

/*let initialData = [
    { country: "España", date: "1/12/2018", trimestral_pib: "305.818 M€", trimestral_variable_pib: "0,70%", annual_variable_pib: "2,20%" },
    { country: "Alemania", date: "1/12/2018", trimestral_pib: "854.124 M€", trimestral_variable_pib: "0,90%", annual_variable_pib: "0,10%" },
    { country: "Reino Unido", date: "1/12/2018", trimestral_pib: "610.918 M€", trimestral_variable_pib: "0,20%", annual_variable_pib: "1,20%" },
    { country: "Francia", date: "1/12/2018", trimestral_pib: "598.352 M€", trimestral_variable_pib: "0,50%", annual_variable_pib: "1,50%" },
    { country: "Italia", date: "1/12/2018", trimestral_pib: "444.875 M€", trimestral_variable_pib: "0,30%", annual_variable_pib: "0,30%" },
    { country: "Portugal", date: "1/12/2018", trimestral_pib: "51.989 M€", trimestral_variable_pib: "0,60%", annual_variable_pib: "2,70%" },
    { country: "Zona Euro", date: "1/12/2018", trimestral_pib: "2.938.241 M€", trimestral_variable_pib: "0,70%", annual_variable_pib: "1,20%" },
    { country: "Estados Unidos", date: "1/12/2018", trimestral_pib: "4.581.625 M€", trimestral_variable_pib: "0,10%", annual_variable_pib: "2,10%" },
    { country: "Japón", date: "1/12/2018", trimestral_pib: "1.074.283 M€", trimestral_variable_pib: "-0,10%", annual_variable_pib: "-0,30%" },
    { country: "China", date: "1/12/2018", trimestral_variable_pib: "1,30%", annual_variable_pib: "6,50%" },
    { country: "Argentina", date: "1/12/2018", trimestral_pib: "99.846 M€", trimestral_variable_pib: "-1,60%", annual_variable_pib: "-6,40%" },
    { country: "Austria", date: "1/12/2018", trimestral_pib: "98.065 M€", trimestral_variable_pib: "1,30%", annual_variable_pib: "2,60%" },
    { country: "Australia", date: "1/12/2018", trimestral_pib: "303.808 M€", trimestral_variable_pib: "0,20%", annual_variable_pib: "2,50%" },
    { country: "Bélgica", date: "1/12/2018", trimestral_pib: "117.271 M€", trimestral_variable_pib: "1,00%", annual_variable_pib: "2,20%" },
    { country: "Bulgaria", date: "1/12/2018", trimestral_pib: "14.293 M€", trimestral_variable_pib: "0,90%", annual_variable_pib: "3,30%" },
    { country: "Brasil", date: "1/12/2018", trimestral_pib: "411.393 M€", trimestral_variable_pib: "-0,40%", annual_variable_pib: "1,10%" },
    { country: "Canadá", date: "1/12/2018", trimestral_pib: "371.308 M€", trimestral_variable_pib: "0,20%", annual_variable_pib: "2,70%" },
    { country: "Suiza", date: "1/12/2018", trimestral_pib: "157.082 M€", trimestral_variable_pib: "0,20%", annual_variable_pib: "2,00%" },
    { country: "Chile", date: "1/12/2018", trimestral_pib: "62.299 M€", trimestral_variable_pib: "1,20%", annual_variable_pib: "3,30%" },
    { country: "Colombia", date: "1/12/2018", trimestral_pib: "69.771 M€", trimestral_variable_pib: "0,10%", annual_variable_pib: "2,80%" },
    { country: "Costa Rica", date: "1/12/2018", trimestral_pib: "13.094 M€", trimestral_variable_pib: "-0,70%", annual_variable_pib: "0,40%" },
    { country: "Chipre", date: "1/12/2018", trimestral_pib: "5.548 M€", trimestral_variable_pib: "2,30%", annual_variable_pib: "6,30%" },
    { country: "Chequia", date: "1/12/2018", trimestral_pib: "53.419 M€", trimestral_variable_pib: "0,80%", annual_variable_pib: "2,60%" },
    { country: "Dinamarca", date: "1/12/2018", trimestral_pib: "76.815 M€", trimestral_variable_pib: "0,50%", annual_variable_pib: "2,10%" },
    { country: "Estonia", date: "1/12/2018", trimestral_pib: "6.722 M€", trimestral_variable_pib: "1,20%", annual_variable_pib: "3,60%" },
    { country: "Finlandia", date: "1/12/2018", trimestral_pib: "58.941 M€", trimestral_variable_pib: "0%", annual_variable_pib: "0,10%" },
    { country: "Grecia", date: "1/12/2018", trimestral_pib: "45.158 M€", trimestral_variable_pib: "0,70%", annual_variable_pib: "2,20%" },
    { country: "Croacia", date: "1/12/2018", trimestral_pib: "13.408 M€", trimestral_variable_pib: "0,60%", annual_variable_pib: "3,10%" },
    { country: "Hungría", date: "1/12/2018", trimestral_pib: "34.799 M€", trimestral_variable_pib: "1,00%", annual_variable_pib: "5,30%" }
];*/

let initialData = [
    { country: "España", date: "2018", trimestral_pib: "305.818 M€", trimestral_variable_pib: "0,70%", annual_variable_pib: "2,20%" },
    { country: "Alemania", date: "2018", trimestral_pib: "854.124 M€", trimestral_variable_pib: "0,90%", annual_variable_pib: "0,10%" },
    { country: "Reino Unido", date: "2018", trimestral_pib: "610.918 M€", trimestral_variable_pib: "0,20%", annual_variable_pib: "1,20%" },
    { country: "Francia", date: "2018", trimestral_pib: "598.352 M€", trimestral_variable_pib: "0,50%", annual_variable_pib: "1,50%" },
    { country: "Italia", date: "2018", trimestral_pib: "444.875 M€", trimestral_variable_pib: "0,30%", annual_variable_pib: "0,30%" },
    { country: "Portugal", date: "2018", trimestral_pib: "51.989 M€", trimestral_variable_pib: "0,60%", annual_variable_pib: "2,70%" },
    { country: "Zona Euro", date: "2018", trimestral_pib: "2.938.241 M€", trimestral_variable_pib: "0,70%", annual_variable_pib: "1,20%" },
    { country: "Estados Unidos", date: "2018", trimestral_pib: "4.581.625 M€", trimestral_variable_pib: "0,10%", annual_variable_pib: "2,10%" },
    { country: "Japón", date: "2018", trimestral_pib: "1.074.283 M€", trimestral_variable_pib: "-0,10%", annual_variable_pib: "-0,30%" },
    { country: "China", date: "2018", trimestral_variable_pib: "1,30%", annual_variable_pib: "6,50%" },
    { country: "Argentina", date: "2018", trimestral_pib: "99.846 M€", trimestral_variable_pib: "-1,60%", annual_variable_pib: "-6,40%" },
    { country: "Austria", date: "2018", trimestral_pib: "98.065 M€", trimestral_variable_pib: "1,30%", annual_variable_pib: "2,60%" },
    { country: "Australia", date: "2018", trimestral_pib: "303.808 M€", trimestral_variable_pib: "0,20%", annual_variable_pib: "2,50%" },
    { country: "Bélgica", date: "2018", trimestral_pib: "117.271 M€", trimestral_variable_pib: "1,00%", annual_variable_pib: "2,20%" },
    { country: "Bulgaria", date: "2018", trimestral_pib: "14.293 M€", trimestral_variable_pib: "0,90%", annual_variable_pib: "3,30%" },
    { country: "Brasil", date: "2018", trimestral_pib: "411.393 M€", trimestral_variable_pib: "-0,40%", annual_variable_pib: "1,10%" },
    { country: "Canadá", date: "2018", trimestral_pib: "371.308 M€", trimestral_variable_pib: "0,20%", annual_variable_pib: "2,70%" },
    { country: "Suiza", date: "2018", trimestral_pib: "157.082 M€", trimestral_variable_pib: "0,20%", annual_variable_pib: "2,00%" },
    { country: "Chile", date: "2018", trimestral_pib: "62.299 M€", trimestral_variable_pib: "1,20%", annual_variable_pib: "3,30%" },
    { country: "Colombia", date: "2018", trimestral_pib: "69.771 M€", trimestral_variable_pib: "0,10%", annual_variable_pib: "2,80%" },
    { country: "Costa Rica", date: "2018", trimestral_pib: "13.094 M€", trimestral_variable_pib: "-0,70%", annual_variable_pib: "0,40%" },
    { country: "Chipre", date: "2018", trimestral_pib: "5.548 M€", trimestral_variable_pib: "2,30%", annual_variable_pib: "6,30%" },
    { country: "Chequia", date: "2018", trimestral_pib: "53.419 M€", trimestral_variable_pib: "0,80%", annual_variable_pib: "2,60%" },
    { country: "Dinamarca", date: "2018", trimestral_pib: "76.815 M€", trimestral_variable_pib: "0,50%", annual_variable_pib: "2,10%" },
    { country: "Estonia", date: "2018", trimestral_pib: "6.722 M€", trimestral_variable_pib: "1,20%", annual_variable_pib: "3,60%" },
    { country: "Finlandia", date: "2018", trimestral_pib: "58.941 M€", trimestral_variable_pib: "0%", annual_variable_pib: "0,10%" },
    { country: "Grecia", date: "2018", trimestral_pib: "45.158 M€", trimestral_variable_pib: "0,70%", annual_variable_pib: "2,20%" },
    { country: "Croacia", date: "2018", trimestral_pib: "13.408 M€", trimestral_variable_pib: "0,60%", annual_variable_pib: "3,10%" },
    { country: "Hungría", date: "2018", trimestral_pib: "34.799 M€", trimestral_variable_pib: "1,00%", annual_variable_pib: "5,30%" }
];



module.exports = (app,db) => {
    
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
    app.get(API_BASE_ALA + "/year/:date", (req, res) => {
      const date = req.params.date;
      // Verificar si el año tiene un formato válido (cuatro dígitos)
      if (!(/^\d{4}$/.test(date))) {
      return res.status(400).send("Bad Request. Please provide a valid year in YYYY format.");
      };
      const yearRegex = new RegExp(`\\d{2}/\\d{2}/${date}`);
      db.find({ date: { $regex: yearRegex } }, (err, listings) => {
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
    }),

    // GET => Buscar por host_location y year
    app.get(API_BASE_ALA + "/:year/:country", (req, res) => {
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

  // POST => Create a new listing
  app.post(API_BASE_ALA + "/", (req, res) => {

    const newData =  req.body;
    const expectedFields = ["country", "date", "trimestral_pib", "trimestral_variable_pib", "annual_variable_pib"];
    const receivedFields = Object.keys(newData);
    const isValidData = expectedFields.every(field => receivedFields.includes(field));

    if (!isValidData) {
        res.sendStatus(400, "Bad Request"); // Datos inválidos
    } else {
        // Verificar si ya existe un documento con el mismo cci en la base de datos
        db.findOne({ country: newData.country, trimestral_pib: newData.trimestral_pib, trimestral_variable_pib: newData.trimestral_variable_pib }, (err, existingData) => {
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
      app.put(API_BASE_ALA + "/:trimestral_pib/:trimestral_variable_pib", (req, res) => {
        const trimestral_pib = parseFloat(req.params.latitude);
        const trimestral_variable_pib = parseFloat(req.params.longitude);
        let data = req.body;
  
        if (!data || Object.keys(data).length === 0 || data.trimestral_pib !== trimestral_pib || data.trimestral_variable_pib !== trimestral_variable_pib) {
            res.sendStatus(400, "BAD REQUEST"); // Datos inválidos
        } else {
            db.update({ trimestral_pib: trimestral_pib, trimestral_variable_pib: trimestral_variable_pib }, data, { }, (err) => {
                if (err) {
                    res.sendStatus(500, "Internal Server Error"); // Error interno del servidor
                }
                res.sendStatus(200, "Ok"); //Actualizacion correcta
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

    // DELETE => Delete specific data by latitude and longitude
    app.delete(API_BASE_ALA + "/:trimestral_pib/:trimestral_variable_pib", (req, res) => {
    const trimestral_pib = parseFloat(req.params.trimestral_pib);
    const trimestral_variable_pib = parseFloat(req.params.trimestral_variable_pib);

    // Eliminar el documento con la latitud y longitud especificadas de la base de datos
    db.remove({ trimestral_pib: trimestral_pib, trimestral_variable_pib: trimestral_variable_pib }, {}, (err, numRemoved) => {
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
    app.post(API_BASE_ALA + "/:country", (req, res) => {
    // Devuelve un estado 405 (Método no permitido) con un mensaje explicativo
    res.status(405).send("METHOD NOT ALLOWED. Please use this endpoint to create a new resource without specifying an ID or param.");
    });
};



/*
const API_BASE = "/api/v1";
const initialData = [
    { country: "España", date: "IV Trim 2018", trimestral_pib: "305.818 M€", trimestral_variable_pib: "0,70%", annual_variable_pib: "2,20%" },
    { country: "Alemania", date: "IV Trim 2018", trimestral_pib: "854.124 M€", trimestral_variable_pib: "0,90%", annual_variable_pib: "0,10%" },
    { country: "Reino Unido", date: "IV Trim 2018", trimestral_pib: "610.918 M€", trimestral_variable_pib: "0,20%", annual_variable_pib: "1,20%" },
    { country: "Francia", date: "IV Trim 2018", trimestral_pib: "598.352 M€", trimestral_variable_pib: "0,50%", annual_variable_pib: "1,50%" },
    { country: "Italia", date: "IV Trim 2018", trimestral_pib: "444.875 M€", trimestral_variable_pib: "0,30%", annual_variable_pib: "0,30%" },
    { country: "Portugal", date: "IV Trim 2018", trimestral_pib: "51.989 M€", trimestral_variable_pib: "0,60%", annual_variable_pib: "2,70%" },
    { country: "Zona Euro", date: "IV Trim 2018", trimestral_pib: "2.938.241 M€", trimestral_variable_pib: "0,70%", annual_variable_pib: "1,20%" },
    { country: "Estados Unidos", date: "IV Trim 2018", trimestral_pib: "4.581.625 M€", trimestral_variable_pib: "0,10%", annual_variable_pib: "2,10%" },
    { country: "Japón", date: "IV Trim 2018", trimestral_pib: "1.074.283 M€", trimestral_variable_pib: "-0,10%", annual_variable_pib: "-0,30%" },
    { country: "China", date: "IV Trim 2018", trimestral_variable_pib: "1,30%", annual_variable_pib: "6,50%" },
    { country: "Argentina", date: "IV Trim 2018", trimestral_pib: "99.846 M€", trimestral_variable_pib: "-1,60%", annual_variable_pib: "-6,40%" },
    { country: "Austria", date: "IV Trim 2018", trimestral_pib: "98.065 M€", trimestral_variable_pib: "1,30%", annual_variable_pib: "2,60%" },
    { country: "Australia", date: "IV Trim 2018", trimestral_pib: "303.808 M€", trimestral_variable_pib: "0,20%", annual_variable_pib: "2,50%" },
    { country: "Bélgica", date: "IV Trim 2018", trimestral_pib: "117.271 M€", trimestral_variable_pib: "1,00%", annual_variable_pib: "2,20%" },
    { country: "Bulgaria", date: "IV Trim 2018", trimestral_pib: "14.293 M€", trimestral_variable_pib: "0,90%", annual_variable_pib: "3,30%" },
    { country: "Brasil", date: "IV Trim 2018", trimestral_pib: "411.393 M€", trimestral_variable_pib: "-0,40%", annual_variable_pib: "1,10%" },
    { country: "Canadá", date: "IV Trim 2018", trimestral_pib: "371.308 M€", trimestral_variable_pib: "0,20%", annual_variable_pib: "2,70%" },
    { country: "Suiza", date: "IV Trim 2018", trimestral_pib: "157.082 M€", trimestral_variable_pib: "0,20%", annual_variable_pib: "2,00%" },
    { country: "Chile", date: "IV Trim 2018", trimestral_pib: "62.299 M€", trimestral_variable_pib: "1,20%", annual_variable_pib: "3,30%" },
    { country: "Colombia", date: "IV Trim 2018", trimestral_pib: "69.771 M€", trimestral_variable_pib: "0,10%", annual_variable_pib: "2,80%" },
    { country: "Costa Rica", date: "IV Trim 2018", trimestral_pib: "13.094 M€", trimestral_variable_pib: "-0,70%", annual_variable_pib: "0,40%" },
    { country: "Chipre", date: "IV Trim 2018", trimestral_pib: "5.548 M€", trimestral_variable_pib: "2,30%", annual_variable_pib: "6,30%" },
    { country: "Chequia", date: "IV Trim 2018", trimestral_pib: "53.419 M€", trimestral_variable_pib: "0,80%", annual_variable_pib: "2,60%" },
    { country: "Dinamarca", date: "IV Trim 2018", trimestral_pib: "76.815 M€", trimestral_variable_pib: "0,50%", annual_variable_pib: "2,10%" },
    { country: "Estonia", date: "IV Trim 2018", trimestral_pib: "6.722 M€", trimestral_variable_pib: "1,20%", annual_variable_pib: "3,60%" },
    { country: "Finlandia", date: "IV Trim 2018", trimestral_pib: "58.941 M€", trimestral_variable_pib: "0%", annual_variable_pib: "0,10%" },
    { country: "Grecia", date: "IV Trim 2018", trimestral_pib: "45.158 M€", trimestral_variable_pib: "0,70%", annual_variable_pib: "2,20%" },
    { country: "Croacia", date: "IV Trim 2018", trimestral_pib: "13.408 M€", trimestral_variable_pib: "0,60%", annual_variable_pib: "3,10%" },
    { country: "Hungría", date: "IV Trim 2018", trimestral_pib: "34.799 M€", trimestral_variable_pib: "1,00%", annual_variable_pib: "5,30%" }
];


module.exports = (app,db) => {

    app.get(API_BASE+"/trimestralpib_stats/loadInitialData",(req, res) =>{
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
    app.get(API_BASE+"/trimestralpib_stats",(req,res)=>{

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
    app.get(API_BASE + '/trimestralpib_stats', (req, res) => {
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
    app.get(API_BASE + '/trimestralpib_stats/:country', (req, res) => {
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
    app.get(API_BASE + '/trimestralpib_stats/:trimestral_variable_pib', (req, res) => {
        const attemps = parseInt(req.params.trimestral_variable_pib);
        console.log(trimestral_variable_pib);
    
        
        db.find({ trimestral_variable_pib: parseInt(trimestral_variable_pib) }, (err, data) => {
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
    app.get(API_BASE + '/trimestralpib_stats/:country/:trimestral_variable_pib', (req, res) => {
        const country = req.params.country;
        const trimestral_variable_pib = parseInt(req.params.trimestral_variable_pib);
    
        
        db.find({ country: country, trimestral_variable_pib: parseInt(trimestral_variable_pib) }, (err, data) => {
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
    app.get(API_BASE + '/trimestralpib_stats', (req, res) => {
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
    app.post(API_BASE + "/trimestralpib_stats/:country", (req, res) => {
        const country = req.params.country;
        let data = req.body;
        res.sendStatus(405, "Method Not Allowed");
    });
    

    app.post(API_BASE+'/trimestralpib_stats', (req, res) => {
        let newData = req.body; 
        const expectedFields = ["country", "date", "trimestral_pib", "trimestral_variable_pib", "annual_variable_pib"];
        const newDataFields = Object.keys(newData);
        const isValidData = expectedFields.every(field => newDataFields.includes(field));
    
        if (!isValidData) {
            
            res.sendStatus(400); 
            return;
        }
        db.findOne({
        country: newData.country,
        date: newData.date,
        trimestral_pib: newData.trimestral_pib,
        trimestral_variable_pib: newData.trimestral_variable_pib,
        annual_variable_pib: newData.annual_variable_pib
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
    app.put(API_BASE + "/trimestralpib_stats", (req, res) => {
        let data = req.body;
        res.sendStatus(405, "Method not allowed");
    });

    app.put(API_BASE+'/trimestralpib_stats/:country', (req, res) => {
        let resourceCountryFromURL = req.params.country; 
        let updatedData = req.body; 
        const expectedFields = ["country", "date", "trimestral_pib", "trimestral_variable_pib", "annual_variable_pib"];
        const updatedDataFields = Object.keys(updatedData);
        const isValidData = expectedFields.every(field => updatedDataFields.includes(field));
    
        if (!isValidData) {
         
            res.sendStatus(400); 
            return;
        }
    
        if (resourceCountryFromURL !== updatedData._country) {
            
            res.sendStatus(400); 
        } else {
           
            db.update({ _country: resourceCountryFromURL }, updatedData, {}, (err, numReplaced) => {
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
    app.delete(API_BASE + "/trimestralpib_stats", (req, res) => {

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
    app.delete(API_BASE+'/trimestralpib_stats/:country', (req, res) => {
        let resourceCountry = req.params.country; 
    
       
        db.remove({ _country: resourceCountry }, {}, (err, numRemoved) => {
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
    });
}
*/


/*
const API_BASE_ALA = "/api/v1/trimestralpib_stats";

var data = [];

function validarDatos(req, res, next) {
    const jsonRecibido = req.body;
    const esquemaEsperado = {
        "country": "string",
        "date": "string",
        "trimestral_pib": "string",
        "trimestral_variable_pib": "string",
        "annual_variable_pib": "string"
        };
        const keysRecibidas = Object.keys(jsonRecibido);
        const keysEsperadas = Object.keys(esquemaEsperado);
        const keysFaltantes = keysEsperadas.filter(key => !keysRecibidas.includes(key));
        
        //comprueba q no haya claves de mas
        const clavesExtra = keysRecibidas.filter(key => !keysEsperadas.includes(key));
        if (clavesExtra.length > 0) {
            console.error(`Se encontraron claves adicionales en el JSON: ${clavesExtra.join(', ')}`);
            return res.sendStatus(400, "Bad request");
        }
    
        //comprueba q no haya claves de menos
        if (keysFaltantes.length > 0) {
            console.error(`Faltan las siguientes claves en el JSON: ${keysFaltantes.join(', ')}` );
            return res.sendStatus(400, "Bad request");
        }
    
        //comprueba q sean los tipos q son
        const erroresTipo = [];
        keysEsperadas.forEach(key => {
            const tipoEsperado = esquemaEsperado[key];
            const valor = jsonRecibido[key];
            if (typeof valor !== tipoEsperado) {
                erroresTipo.push(`El valor de '${key}' debe ser de tipo '${tipoEsperado}'`);
            }
        });
        if (erroresTipo.length > 0) {
            console.error(`Errores de tipo: ${erroresTipo.join(', ')}`);
            return res.sendStatus(400, "Bad request");
        }
    
        next();
    }

module.exports = (app) => {
    
    // GET => Lista todos los datos
    
    app.get(API_BASE_ALA+"/",(req,res)=>{
        res.status(200).send(JSON.stringify(data));
    }),

    // GET => loadInitialData (al hacer un GET cree 10 o más datos en el array de NodeJS si está vacío)
    app.get(API_BASE_ALA+"/loadInitialData",(req,res) => {
        if(data.length === 0){
            let newdata = [
                { country: "España", date: "IV Trim 2018", trimestral_pib: "305.818 M€", trimestral_variable_pib: "0,70%", annual_variable_pib: "2,20%" },
                { country: "Alemania", date: "IV Trim 2018", trimestral_pib: "854.124 M€", trimestral_variable_pib: "0,90%", annual_variable_pib: "0,10%" },
                { country: "Reino Unido", date: "IV Trim 2018", trimestral_pib: "610.918 M€", trimestral_variable_pib: "0,20%", annual_variable_pib: "1,20%" },
                { country: "Francia", date: "IV Trim 2018", trimestral_pib: "598.352 M€", trimestral_variable_pib: "0,50%", annual_variable_pib: "1,50%" },
                { country: "Italia", date: "IV Trim 2018", trimestral_pib: "444.875 M€", trimestral_variable_pib: "0,30%", annual_variable_pib: "0,30%" },
                { country: "Portugal", date: "IV Trim 2018", trimestral_pib: "51.989 M€", trimestral_variable_pib: "0,60%", annual_variable_pib: "2,70%" },
                { country: "Zona Euro", date: "IV Trim 2018", trimestral_pib: "2.938.241 M€", trimestral_variable_pib: "0,70%", annual_variable_pib: "1,20%" },
                { country: "Estados Unidos", date: "IV Trim 2018", trimestral_pib: "4.581.625 M€", trimestral_variable_pib: "0,10%", annual_variable_pib: "2,10%" },
                { country: "Japón", date: "IV Trim 2018", trimestral_pib: "1.074.283 M€", trimestral_variable_pib: "-0,10%", annual_variable_pib: "-0,30%" },
                { country: "China", date: "IV Trim 2018", trimestral_variable_pib: "1,30%", annual_variable_pib: "6,50%" },
                { country: "Argentina", date: "IV Trim 2018", trimestral_pib: "99.846 M€", trimestral_variable_pib: "-1,60%", annual_variable_pib: "-6,40%" },
                { country: "Austria", date: "IV Trim 2018", trimestral_pib: "98.065 M€", trimestral_variable_pib: "1,30%", annual_variable_pib: "2,60%" },
                { country: "Australia", date: "IV Trim 2018", trimestral_pib: "303.808 M€", trimestral_variable_pib: "0,20%", annual_variable_pib: "2,50%" },
                { country: "Bélgica", date: "IV Trim 2018", trimestral_pib: "117.271 M€", trimestral_variable_pib: "1,00%", annual_variable_pib: "2,20%" },
                { country: "Bulgaria", date: "IV Trim 2018", trimestral_pib: "14.293 M€", trimestral_variable_pib: "0,90%", annual_variable_pib: "3,30%" },
                { country: "Brasil", date: "IV Trim 2018", trimestral_pib: "411.393 M€", trimestral_variable_pib: "-0,40%", annual_variable_pib: "1,10%" },
                { country: "Canadá", date: "IV Trim 2018", trimestral_pib: "371.308 M€", trimestral_variable_pib: "0,20%", annual_variable_pib: "2,70%" },
                { country: "Suiza", date: "IV Trim 2018", trimestral_pib: "157.082 M€", trimestral_variable_pib: "0,20%", annual_variable_pib: "2,00%" },
                { country: "Chile", date: "IV Trim 2018", trimestral_pib: "62.299 M€", trimestral_variable_pib: "1,20%", annual_variable_pib: "3,30%" },
                { country: "Colombia", date: "IV Trim 2018", trimestral_pib: "69.771 M€", trimestral_variable_pib: "0,10%", annual_variable_pib: "2,80%" },
                { country: "Costa Rica", date: "IV Trim 2018", trimestral_pib: "13.094 M€", trimestral_variable_pib: "-0,70%", annual_variable_pib: "0,40%" },
                { country: "Chipre", date: "IV Trim 2018", trimestral_pib: "5.548 M€", trimestral_variable_pib: "2,30%", annual_variable_pib: "6,30%" },
                { country: "Chequia", date: "IV Trim 2018", trimestral_pib: "53.419 M€", trimestral_variable_pib: "0,80%", annual_variable_pib: "2,60%" },
                { country: "Dinamarca", date: "IV Trim 2018", trimestral_pib: "76.815 M€", trimestral_variable_pib: "0,50%", annual_variable_pib: "2,10%" },
                { country: "Estonia", date: "IV Trim 2018", trimestral_pib: "6.722 M€", trimestral_variable_pib: "1,20%", annual_variable_pib: "3,60%" },
                { country: "Finlandia", date: "IV Trim 2018", trimestral_pib: "58.941 M€", trimestral_variable_pib: "0%", annual_variable_pib: "0,10%" },
                { country: "Grecia", date: "IV Trim 2018", trimestral_pib: "45.158 M€", trimestral_variable_pib: "0,70%", annual_variable_pib: "2,20%" },
                { country: "Croacia", date: "IV Trim 2018", trimestral_pib: "13.408 M€", trimestral_variable_pib: "0,60%", annual_variable_pib: "3,10%" },
                { country: "Hungría", date: "IV Trim 2018", trimestral_pib: "34.799 M€", trimestral_variable_pib: "1,00%", annual_variable_pib: "5,30%" }
              ]
            for(let i=0; i<newdata.length; i++){
                data.push(newdata[i]);
            }
            res.sendStatus(201, "Data created");  
        } else {
            res.status(200).send(JSON.stringify(data));
        }
    }),

    // GET => Get data 

    app.get(API_BASE_ALA + "/:country",(req,res)=>{
        const PAIS = req.params.country;
        const countryDatos = data.filter(p => p.country === PAIS);

        if(countryDatos.length > 0){
            res.status(200).send(JSON.stringify(countryDatos));
        } else {
            res.sendStatus(404, "NOT FOUND");
        }
    }),

    // POST => Crea un nuevo

    app.post(API_BASE_ALA + "/", validarDatos, (req,res) => {
        let newdata = req.body;
        const equal = data.some(old => old.country === newdata.country && old.date === newdata.date && old.trimestral_pib === newdata.trimestral_pib 
            && old.trimestral_variable_pib === newdata.trimestral_variable_pib && old.annual_variable_pib === newdata.annual_variable_pib);
        if(equal){
            // POST not allowed due to resource already existing
            res.sendStatus(409, "CONFLICT");
        } else if (!newdata || Object.keys(newdata).length === 0){
            // If not valid JSON received
            res.sendStatus(400, "BAD REQUEST");
        } else {
            // Valid POST
            data.push(newdata);
            res.sendStatus(201, "CREATED");
        }
    })
    
    

    // PUT => Can't update root directory
    app.put(API_BASE_ALA + "/", (req,res)=> {
        let newdata = req.body;
        res.sendStatus(405,"METHOD NOW ALLOWED");
    }),

    //PUT => Update resource 

    app.put(API_BASE_ALA + "/:country", (req,res) =>{
        const country = req.params.country;
        let newdata = req.body;

        const index = data.findIndex(p => p.country === country);

        if(index === -1){
            res.sendStatus(404, "NOT FOUND");
        } else if (!newdata || Object.keys(newdata).length === 0 || newdata.country !== country){
            res.sendStatus(400, "BAD REQUEST");
        } else {
            data[index] = newdata;
            res.sendStatus(200, "OK");
        }
    }),

    // DELETE => Delete specific data
    app.delete(API_BASE_ALA + "/:country", (req, res) => {
        const country = req.params.country;
        const initialLength = data.length;
        data = data.filter(data => data.country !== country);
        if (data.length < initialLength) {
            res.status(200).send("DELETED");
        } else {
            res.sendStatus(404, "COUNTRY NOT FOUND");
        }
    }),

    // DELETE => Delete all data

    app.delete(API_BASE_ALA + "/", (req,res) => {
        data.splice(0, data.length);
        res.status(200).send("ALL DATA DELETED");
    }),

    // DELETE => Delete specific data
    app.delete(API_BASE_ALA + "/:trimestral_pib", (req,res) => {
        const trimestral_pib = parseInt(req.params.trimestral_pib);
        const nuevosDatos = data.filter(entry => entry.listing_trimestral_pib !== trimestral_pib);

        if(nuevosDatos.length < data.length){
            //Delete data from specified filter
            data = nuevosDatos;
            res.sendStatus(200, "OK");
        } else {
            //Try to acces not existing resource
            res.sendStatus(404, "NOT FOUND");
        }
    }),

    // POST => Try to use not allowed method
    app.post(API_BASE_ALA + "/:country", (req,res) =>{
        const PAIS = req.params.country;
        let newdata = req.body;
        res.sendStatus(405, "METHOD NOT ALLOWED");
    });
};
*/


