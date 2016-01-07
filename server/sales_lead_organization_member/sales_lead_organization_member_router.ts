import * as express from 'express';

import {sendError, formatSend, getAuthorizationData} from '../core/web_util';
import {salesLeadOrganizationMemberService} from './sales_lead_organization_member_service';
import {SalesLeadOrganizationMember, ModelOptions} from '../../client/core/dto';

const router = express.Router();

router.post('/', (req, res) => {
   const modelOptions: ModelOptions = {
    authorization: getAuthorizationData(req)
  };
  salesLeadOrganizationMemberService.createOne(req.body, modelOptions)
    .then((member: SalesLeadOrganizationMember) => formatSend(res, member), (err) => sendError(res, err));
});

router.put('/:id', (req, res) => {
  const modelOptions: ModelOptions = {
    authorization: getAuthorizationData(req)
  };
  salesLeadOrganizationMemberService.updateOne(req.body)
    .then((member: SalesLeadOrganizationMember) => formatSend(res, member), (err) => sendError(res, err));
});

router.delete('/:id', (req, res) => {
  const modelOptions: ModelOptions = {
    authorization: getAuthorizationData(req),
    additionalData: {_id: req.params.id}
  };
  salesLeadOrganizationMemberService.removeOneById(req.params.id)
    .then((member: SalesLeadOrganizationMember) => formatSend(res, member), (err) => sendError(res, err));
});

router.get('/_find', (req: express.Request, res: express.Response) => {
  const modelOptions: ModelOptions = {
    authorization: getAuthorizationData(req)
  };
  salesLeadOrganizationMemberService.find(req.query)
    .then((members: SalesLeadOrganizationMember[]) => formatSend(res, members), (err: any) => sendError(res, err));
});

router.get('/_exist', (req, res) => {
  const modelOptions: ModelOptions = {
    authorization: getAuthorizationData(req)
  };
  salesLeadOrganizationMemberService.exist(req.query)
    .then((exist: boolean) => formatSend(res, exist), (err: any) => sendError(res, err));
});

router.get('/:id', (req: express.Request, res: express.Response) => {
  const modelOptions: ModelOptions = {
    authorization: getAuthorizationData(req)
  };
  salesLeadOrganizationMemberService.findOneById(req.params.id)
    .then((member: SalesLeadOrganizationMember) => formatSend(res, member), (err: any) => sendError(res, err));
});


export = router;

