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
* Fields to filter on in the search. Atleast reqServiceProviderId or consServiceProviderId or both is required and the searching serviceprovider (caller) must be one of them. The other fields are optional. It is a search hit if all fields matches a consent request (AND)
*/
export class SearchConsentRequestsDTOFields {
    /**
    * Only take consent requests created before or equal to this timestamp.
    */
    'stopCreatedAt'?: string;
    /**
    * Only take consent requests created after or equal to this timestamp. Will be passed to JavaScripts Date constructor so must be a valid time-string that is accepted. The database stores dates without timezone (UTC) and the comparison is done without timezone
    */
    'startCreatedAt'?: string;
    /**
    * Consent request status, for example \"INITIALIZED\", \"FINALIZED\" or \"INACTIVE\"
    */
    'status'?: string;
    /**
    * The consenting serviceprovider on consent request
    */
    'consServiceProviderId'?: string;
    /**
    * The requesting serviceprovider on consent request
    */
    'reqServiceProviderId'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "stopCreatedAt",
            "baseName": "stopCreatedAt",
            "type": "string",
            "format": ""
        },
        {
            "name": "startCreatedAt",
            "baseName": "startCreatedAt",
            "type": "string",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string",
            "format": ""
        },
        {
            "name": "consServiceProviderId",
            "baseName": "consServiceProviderId",
            "type": "string",
            "format": ""
        },
        {
            "name": "reqServiceProviderId",
            "baseName": "reqServiceProviderId",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SearchConsentRequestsDTOFields.attributeTypeMap;
    }
    
    public constructor() {
    }
}
