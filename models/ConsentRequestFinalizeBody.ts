/**
 * @ao/ah-api
 * Telia Smart Access API
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

/**
* Body to send when finalizing a consent request. Contains a jwt signed by the issuer which is the consenting serviceprovider. The jwt payload is of type AHConsReqFinalizeSp2ToAhJWT
*/
export class ConsentRequestFinalizeBody {
    /**
    * Signed JWT
    */
    'consReqFinalizeJWT': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "consReqFinalizeJWT",
            "baseName": "consReqFinalizeJWT",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ConsentRequestFinalizeBody.attributeTypeMap;
    }
    
    public constructor() {
    }
}

