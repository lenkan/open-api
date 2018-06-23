module.exports = {
  constructorArgs: {
    version: 3
  },

  apiDoc: {
    "swagger": "3.0.0",
    "info": {
      "version": "1.0.0",
      "title": "Swagger Petstore",
      "license": {
        "name": "MIT"
      }
    },
    "servers": [
      {
        "url": "http://petstore.swagger.io/v1"
      }
    ],
    "paths": {
      "/pets": {
        "get": {
          "summary": "List all pets",
          "operationId": "listPets",
          "tags": [
            "pets"
          ],
          "parameters": [
            {
              "name": "limit",
              "in": "query",
              "description": "How many items to return at one time (max 100)",
              "required": false,
              "schema": {
                "type": "integer",
                "format": "int32"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "An paged array of pets",
              "headers": {
                "x-next": {
                  "description": "A link to the next page of responses",
                  "schema": {
                    "type": "string"
                  }
                }
              },
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/Pets"
                  }
                }
              }
            },
            "default": {
              "description": "unexpected error",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/Error"
                  }
                }
              }
            }
          }
        },
        "post": {
          "summary": "Create a pet",
          "operationId": "createPets",
          "tags": [
            "pets"
          ],
          "responses": {
            "201": {
              "description": "Null response"
            },
            "default": {
              "description": "unexpected error",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/Error"
                  }
                }
              }
            }
          }
        }
      },
      "/pets/{petId}": {
        "get": {
          "summary": "Info for a specific pet",
          "operationId": "showPetById",
          "tags": [
            "pets"
          ],
          "parameters": [
            {
              "name": "petId",
              "in": "path",
              "required": true,
              "description": "The id of the pet to retrieve",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Expected response to a valid request",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/Pets"
                  }
                }
              }
            },
            "default": {
              "description": "unexpected error",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/Error"
                  }
                }
              }
            }
          }
        }
      }
    },
    "components": {
      "schemas": {
        "Pet": {
          "required": [
            "id",
            "name"
          ],
          "properties": {
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "name": {
              "type": "string"
            },
            "tag": {
              "type": "string"
            }
          }
        },
        "Pets": {
          "type": "array",
          "items": {
            "$ref": "#/components/schemas/Pet"
          }
        },
        "Error": {
          "required": [
            "code",
            "message"
          ],
          "properties": {
            "code": {
              "type": "integer",
              "format": "int32"
            },
            "message": {
              "type": "string"
            }
          }
        }
      }
    }

  },

  errors: [{
    "property": "instance",
    "message": "requires property \"openapi\"",
    "schema": "http://openapis.org/v3/schema.json#",
    "instance": {
      "swagger": "3.0.0",
      "info": {"version": "1.0.0", "title": "Swagger Petstore", "license": {"name": "MIT"}},
      "servers": [{"url": "http://petstore.swagger.io/v1"}],
      "paths": {
        "/pets": {
          "get": {
            "summary": "List all pets",
            "operationId": "listPets",
            "tags": ["pets"],
            "parameters": [{
              "name": "limit",
              "in": "query",
              "description": "How many items to return at one time (max 100)",
              "required": false,
              "schema": {"type": "integer", "format": "int32"}
            }],
            "responses": {
              "200": {
                "description": "An paged array of pets",
                "headers": {
                  "x-next": {
                    "description": "A link to the next page of responses",
                    "schema": {"type": "string"}
                  }
                },
                "content": {"application/json": {"schema": {"$ref": "#/components/schemas/Pets"}}}
              },
              "default": {
                "description": "unexpected error",
                "content": {"application/json": {"schema": {"$ref": "#/components/schemas/Error"}}}
              }
            }
          },
          "post": {
            "summary": "Create a pet",
            "operationId": "createPets",
            "tags": ["pets"],
            "responses": {
              "201": {"description": "Null response"},
              "default": {
                "description": "unexpected error",
                "content": {"application/json": {"schema": {"$ref": "#/components/schemas/Error"}}}
              }
            }
          }
        },
        "/pets/{petId}": {
          "get": {
            "summary": "Info for a specific pet",
            "operationId": "showPetById",
            "tags": ["pets"],
            "parameters": [{
              "name": "petId",
              "in": "path",
              "required": true,
              "description": "The id of the pet to retrieve",
              "schema": {"type": "string"}
            }],
            "responses": {
              "200": {
                "description": "Expected response to a valid request",
                "content": {"application/json": {"schema": {"$ref": "#/components/schemas/Pets"}}}
              },
              "default": {
                "description": "unexpected error",
                "content": {"application/json": {"schema": {"$ref": "#/components/schemas/Error"}}}
              }
            }
          }
        }
      },
      "components": {
        "schemas": {
          "Pet": {
            "required": ["id", "name"],
            "properties": {
              "id": {"type": "integer", "format": "int64"},
              "name": {"type": "string"},
              "tag": {"type": "string"}
            }
          },
          "Pets": {"type": "array", "items": {"$ref": "#/components/schemas/Pet"}},
          "Error": {
            "required": ["code", "message"],
            "properties": {"code": {"type": "integer", "format": "int32"}, "message": {"type": "string"}}
          }
        }
      }
    },
    "name": "required",
    "argument": "openapi",
    "stack": "instance requires property \"openapi\""
  }, {
    "property": "instance",
    "message": "additionalProperty \"swagger\" exists in instance when not allowed",
    "schema": "http://openapis.org/v3/schema.json#",
    "instance": {
      "swagger": "3.0.0",
      "info": {"version": "1.0.0", "title": "Swagger Petstore", "license": {"name": "MIT"}},
      "servers": [{"url": "http://petstore.swagger.io/v1"}],
      "paths": {
        "/pets": {
          "get": {
            "summary": "List all pets",
            "operationId": "listPets",
            "tags": ["pets"],
            "parameters": [{
              "name": "limit",
              "in": "query",
              "description": "How many items to return at one time (max 100)",
              "required": false,
              "schema": {"type": "integer", "format": "int32"}
            }],
            "responses": {
              "200": {
                "description": "An paged array of pets",
                "headers": {
                  "x-next": {
                    "description": "A link to the next page of responses",
                    "schema": {"type": "string"}
                  }
                },
                "content": {"application/json": {"schema": {"$ref": "#/components/schemas/Pets"}}}
              },
              "default": {
                "description": "unexpected error",
                "content": {"application/json": {"schema": {"$ref": "#/components/schemas/Error"}}}
              }
            }
          },
          "post": {
            "summary": "Create a pet",
            "operationId": "createPets",
            "tags": ["pets"],
            "responses": {
              "201": {"description": "Null response"},
              "default": {
                "description": "unexpected error",
                "content": {"application/json": {"schema": {"$ref": "#/components/schemas/Error"}}}
              }
            }
          }
        },
        "/pets/{petId}": {
          "get": {
            "summary": "Info for a specific pet",
            "operationId": "showPetById",
            "tags": ["pets"],
            "parameters": [{
              "name": "petId",
              "in": "path",
              "required": true,
              "description": "The id of the pet to retrieve",
              "schema": {"type": "string"}
            }],
            "responses": {
              "200": {
                "description": "Expected response to a valid request",
                "content": {"application/json": {"schema": {"$ref": "#/components/schemas/Pets"}}}
              },
              "default": {
                "description": "unexpected error",
                "content": {"application/json": {"schema": {"$ref": "#/components/schemas/Error"}}}
              }
            }
          }
        }
      },
      "components": {
        "schemas": {
          "Pet": {
            "required": ["id", "name"],
            "properties": {
              "id": {"type": "integer", "format": "int64"},
              "name": {"type": "string"},
              "tag": {"type": "string"}
            }
          },
          "Pets": {"type": "array", "items": {"$ref": "#/components/schemas/Pet"}},
          "Error": {
            "required": ["code", "message"],
            "properties": {"code": {"type": "integer", "format": "int32"}, "message": {"type": "string"}}
          }
        }
      }
    },
    "name": "additionalProperties",
    "argument": "swagger",
    "stack": "instance additionalProperty \"swagger\" exists in instance when not allowed"
  }]
};
