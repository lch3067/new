
import {TreeNodeProps} from "../../src/pages/admin/codeControll/component/Treecomponent/type/treemenutype"

  

export const ExampleapiController = (): TreeNodeProps['node'] => {
    const example: TreeNodeProps['node'] = require('../assets/exaple.json');
    return example;
};


